import {
  FNAME,
  LNAME,
  EMAIL,
  MOBILE,
  LINKEDIN,
  GITHUB,
  TWITTER,
  PORTFOLIO,
} from "../actions/types";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  mobile: "",
  linkedin: "",
  github: "",
  twitter: "",
  portfolio: "",
};

export const contactReducer = (state, action) => {
  switch (action.type) {
    case FNAME:
      return { ...state, firstname: action.payload };
    case LNAME:
      return { ...state, lastname: action.payload };
    case EMAIL:
      return { ...state, email: action.payload };
    case MOBILE:
      return { ...state, mobile: action.payload };
    case LINKEDIN:
      return { ...state, linkedin: action.payload };
    case GITHUB:
      return { ...state, github: action.payload };
    case TWITTER:
      return { ...state, twitter: action.payload };
    case PORTFOLIO:
      return { ...state, portfolio: action.payload };
    default:
      return initialState;
  }
};
