import { combineReducers } from "redux";
import darkmodeReducer from "./darkmodeReducer";
import userReducer from "./userReducer";
import userProfileDropDownReducer from "../reducers/userProfileDropdownReducer";

const rootReducer = combineReducers({
  darkmode: darkmodeReducer,
  user: userReducer,
  showUserDropDown: userProfileDropDownReducer,
});

export default rootReducer;
