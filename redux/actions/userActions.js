import { LOGIN_USER, LOGOUT_USER } from "./types";

export const loginUser = (user) => (dispatch) => {
  dispatch({
    type: LOGIN_USER,
    payload: {
      ID: user.ID,
      profilePhoto: user.profilePhoto,
      description: user.description,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      backgroundImage: user.backgroundImage,
    },
  });
};
export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};
