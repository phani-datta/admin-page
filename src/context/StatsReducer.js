const statsReducer = (state, action) => {
    switch (action.type) {
        case "GET_STATS":
            return {
                ...state,
                stats: action.payload,
                loading: false
            };
        case "GET_TABLE_DATA":
            return {
                ...state,
                tableData: action.payload,
                loading: false
            };
        case "SET_LOADING":
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};

export default statsReducer;