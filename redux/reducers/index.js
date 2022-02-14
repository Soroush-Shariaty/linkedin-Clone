import { combineReducers } from "redux";
import darkmodeReducer from "./darkmodeReducer";

const rootReducer = combineReducers({
  darkmode: darkmodeReducer,
});

export default rootReducer;
