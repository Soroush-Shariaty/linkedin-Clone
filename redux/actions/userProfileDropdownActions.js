import { SHOW_USER_DROPDOWN, HIDE_USER_DROPDOWN } from "./types";

export const showUserDropDown = () => (dispatch) => {
  dispatch({
    type: SHOW_USER_DROPDOWN,
  });
};
export const hideUserDropDown = () => (dispatch) => {
  dispatch({
    type: HIDE_USER_DROPDOWN,
  });
};
