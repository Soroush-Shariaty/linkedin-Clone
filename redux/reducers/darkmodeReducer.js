import { SET_DARK_THEME, SET_LIGHT_THEME } from "../actions/types";

//? How to detect system dark mode here?
// let matched = false;
// matched = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialState = {
  darkmode: false,
};

export default function darkmodeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DARK_THEME:
      return { ...state, darkmode: true };
    case SET_LIGHT_THEME:
      return { ...state, darkmode: false };
    default:
      return state;
  }
}
