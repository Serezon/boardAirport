import { searchFilter } from "../containers/app";

export function reducer(state = {}, action) {
  switch (action.type) {
    case "SET_SHIFT":
      return Object.assign({}, state, {
        shift: action.shift
      });
    case "SET_SEARCH":
      return Object.assign({}, state, {
        search: action.search.toLowerCase()
      });
    case "RUN_FILTER":
      var newData = state.data[action.shift || state.shift].filter(x => {
        return (
          x["planeTypeID.code"].toLowerCase().includes(action.search || state.search)
        );
      });
      return Object.assign({}, state, {
        shift: action.shift || state.shift,
        search: action.search || state.search,
        filteredData: searchFilter(state.search, newData)
      });
    case "LOAD_DATA_START":
      return Object.assign({}, state, {
        day: action.day
      });
    case "LOAD_DATA_END":
      var newData = action.payload.data[state.shift].filter(x => {
        return (
          x["planeTypeID.code"] &&
          x["planeTypeID.code"].toLowerCase().includes(action.search || state.search)
        );
      });
      return Object.assign({}, state, {
        data: action.payload.data,
        shift: Object.keys(action.payload.data)[0],
        filteredData: searchFilter(state.search, newData)
      });
    default:
      return state;
  }
}





