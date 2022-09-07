import { createContext, useReducer } from "react";
import statsReducer from "./StatsReducer";

const StatsContext = createContext();

const MAIN_URL = "https://admindevapi.wowtalent.live/api/admin/dashboard";

export const StatsProvider = ({ children }) => {

    const initialState = {
        stats: {},
        tableData: [],
        loading: false
    };

    const [state, dispatch] = useReducer(statsReducer, initialState);

    const setLoading = () => {
        dispatch({
            type: "SET_LOADING"
        });
    };

    const fetchData = async (fromDate, toDate, entries = 50) => {
        let tableDataURL = MAIN_URL + "/installstatasticlist";
        let statisticsURL = MAIN_URL + "/installstatasticcount";
        setLoading();
        if (fromDate || toDate) {
            tableDataURL = MAIN_URL + "/installstatasticlist?fromdate=" + fromDate + "&todate=" + toDate;
            statisticsURL = MAIN_URL + "/installstatasticcount?fromdate=" + fromDate + "&todate=" + toDate;
        }
        setLoading();
        const statisticsResponse = await fetch(statisticsURL);
        const statisticsData = await statisticsResponse.json();
        dispatch({
            type: "GET_STATS",
            payload: statisticsData.data
        });

        const initialTableDataResponse = await fetch(tableDataURL);
        const initialTableData = await initialTableDataResponse.json();
        let totalData = [];


        for (let i = 0; i < initialTableData.data.pages; i++) {
            tableDataURL = MAIN_URL + "/installstatasticlist?page=" + (i + 1);
            if (fromDate || toDate) {
                tableDataURL = MAIN_URL + "/installstatasticlist?page=" + (i + 1) + "&fromdate=" + fromDate + "&todate=" + toDate;
            }
            const response = await fetch(tableDataURL);
            const data = await response.json();
            totalData = totalData.concat(data.data.data);
        }

        let splitArray = [];
        for (let i = 0; i < totalData.length; i += entries) {
            const chunk = totalData.slice(i, i + entries);
            splitArray.push(chunk);
        }

        dispatch({
            type: "GET_TABLE_DATA",
            payload: splitArray
        });
    };

    return <StatsContext.Provider
        value={{
            stats: state.stats,
            loading: state.loading,
            tableData: state.tableData,
            fetchData
        }}
    >
        {children}
    </StatsContext.Provider>;
};

export default StatsContext;