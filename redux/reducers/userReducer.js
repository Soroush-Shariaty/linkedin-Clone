import { LOGIN_USER, LOGOUT_USER } from "./../actions/types";

const initialState = {
  ID: 2,
  profilePhoto: "Jane1.jpg",
  description: "Freelance web developer",
  name: "Jane Doe",
  email: "jane@gmail.com",
  password: "123456",
  isAdmin: false,
  backgroundImage: "bg2.jpg",
};

// ID: 0,
// profilePhoto: "",
// description: "",
// backgroundImage: "",
// name: "",
// email: "",
// isAdmin: false,

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        ID: action.payload.ID,
        profilePhoto: action.payload.profilePhoto,
        description: action.payload.description,
        backgroundImage: action.payload.backgroundImage,
        name: action.payload.name,
        email: action.payload.email,
        isAdmin: action.payload.isAdmin,
      };
    case LOGOUT_USER:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
