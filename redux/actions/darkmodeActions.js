import { SET_DARK_THEME, SET_LIGHT_THEME } from "./types";

export const setThemeDark = () => (dispatch) => {
  dispatch({
    type: SET_DARK_THEME,
  });
};
export const setThemeLight = () => (dispatch) => {
  dispatch({
    type: SET_LIGHT_THEME,
  });
};
