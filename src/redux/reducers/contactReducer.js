import { CONTACT } from "../actions/types";

const initialState = {
  contact: {
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    linkedin: "",
    git: "",
    twitter: "",
    portfolio: "",
  },
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT:
      console.log("state", action.payload);
      return { ...state, contact: action.payload };
    default:
      return state;
  }
};

export default contactReducer;
