import { useContext, useEffect, useState } from "react";
import StatsContext from "../context/StatsContext";
import { GrAndroid, GrApple } from 'react-icons/gr';

const Table = () => {
    const { tableData, loading, fetchData, totalDataLength } = useContext(StatsContext);
    const [entries, setEntries] = useState(50);
    const [pageNumber, setPageNumber] = useState(1);
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    const handlePagination = (index) => {
        setPageNumber(index);
    };

    const filterData = (e) => {
        e.preventDefault();
        fetchData(fromDate, toDate, entries);
    };

    const resetData = (e) => {
        e.preventDefault();
        fetchData();
        setPageNumber(1);
        setFromDate("");
        setToDate("");
    };

    const handleFromDate = (event) => {
        setFromDate(event.target.value);
        console.log("From Date", event.target.value);
    };

    const handleToDate = (event) => {
        setToDate(event.target.value);
        console.log("To Date", event.target.value, typeof event.target.value);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEntriesChange = (event) => {
        fetchData(fromDate, toDate, parseInt(event.target.value));
        setPageNumber(1);
        setEntries(parseInt(event.target.value));
    };

    const platformBlock = (android, ios, percentage) => {
        const notPresent = [undefined, null];

        return (
            <td>
                <div className="flex mb-1 items-center gap-2">
                    <GrAndroid />
                    {notPresent.includes(android) ? "0%" : percentage ? android + "%" : android}
                </div>
                <div className="flex items-center gap-2">
                    <GrApple />
                    {notPresent.includes(ios) ? "0%" : percentage ? ios + "%" : ios}
                </div>
            </td>
        );
    };

    const totalValue = () => {
        let totalLength = [];
        if (!loading && tableData) {
            totalLength = tableData.map(arr => arr.length);
            return totalLength.reduce((partialSum, a) => partialSum + a, 0);
        }
    };

    return (
        <div className="bg-[#213046] mt-6">
            <div className="block md:flex justify-between items-center pt-10 px-10">
                <div className="flex items-center gap-2">
                    <p className="text-white">Show</p>
                    <select defaultValue={50} className="select" onChange={handleEntriesChange}>
                        <option value={10}>10</option>
                        <option value={50}>50</option>
                        <option value={100} >100</option>
                        <option value={500}>500</option>
                        <option value={1000}>1000</option>
                    </select>
                    <p className="text-white">Entries</p>
                </div>
                <form onSubmit={filterData}>
                    <div className="block md:flex items-end gap-4">
                        <div className="flex gap-4">
                            <div>
                                <label htmlFor="fromDate">From date</label><br />
                                <input required type="date" className="cursor-pointer" id="fromDate" value={fromDate} onChange={handleFromDate} />
                            </div>
                            <div>
                                <label htmlFor="toDate">To date</label><br />
                                <input required type="date" className="cursor-pointer" id="toDate" value={toDate} onChange={handleToDate} />
                            </div>
                        </div>
                        <div className="btn-group justify-center mt-4 md:m-0">
                            <button type="submit" className="btn btn-active">Search</button>
                            <button className="btn" onClick={resetData}>Reset</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="overflow-x-auto px-10 py-5">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th style={{ position: "unset" }}>Date</th>
                            <th>Day Installs</th>
                            <th>Platform</th>
                            <th>Day Uninstalls</th>
                            <th>platform</th>
                            <th>Churn Rate</th>
                            <th>Churn Platform</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading && tableData && tableData[pageNumber - 1] && tableData[pageNumber - 1].map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{new Date(data.created_At).toLocaleDateString()}</td>
                                    <td>{data.totalinstall}</td>
                                    {platformBlock(data.android_install, data.ios_install)}
                                    <td>{data.totaluninstall}</td>
                                    {platformBlock(data.android_uninstall, data.totaluninstall)}
                                    <td>{data.totalchurn}</td>
                                    {platformBlock(data.android_churn, data.ios_churn, true)}
                                </tr>
                            );
                        })
                        }
                    </tbody>
                </table>
                <div className="block md:flex items-center justify-between">
                    <h1 className="text-md text-white">Showing {!loading && tableData && tableData[pageNumber - 1] && tableData[pageNumber - 1].length} of {totalValue()}</h1>
                    <div className="btn-group justify-end mt-2">
                        {!loading && tableData.map((data, index) => {
                            return <button key={index} onClick={() => handlePagination(index + 1)} className={pageNumber === index + 1 ? "btn btn-md btn-active" : "btn btn-md"} >{index + 1}</button>;
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Table;