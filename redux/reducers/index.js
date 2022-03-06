import { combineReducers } from "redux";
import darkmodeReducer from "./darkmodeReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  darkmode: darkmodeReducer,
  user: userReducer,
});

export default rootReducer;
