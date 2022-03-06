import { LOGIN_USER, LOGOUT_USER } from "./../actions/types";

const initialState = {
  ID: 5,
  profilePhoto: "William.jpg",
  description: "Assistant Professor",
  name: "William Moore",
  email: "william@gmail.com",
  password: "123456",
  isAdmin: false,
  backgroundImage: "bg4.jpg",
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
