import { SHOW_USER_DROPDOWN, HIDE_USER_DROPDOWN } from "../actions/types";

//? How to detect system dark mode here?
// let matched = false;
// matched = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialState = {
  showUserDropDown: false,
};

export default function darkmodeReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_USER_DROPDOWN:
      return { ...state, showUserDropDown: true };
    case HIDE_USER_DROPDOWN:
      return { ...state, showUserDropDown: false };
    default:
      return state;
  }
}
