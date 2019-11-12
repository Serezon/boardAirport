import { combineReducers } from "redux";
import { reducer } from "./airplanes";

const rootReducer = combineReducers({
  propReducer: reducer
});

export default rootReducer;