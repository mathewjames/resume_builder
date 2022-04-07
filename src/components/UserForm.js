import React from "react";
import { useSelector } from "react-redux";
import ContactDetails from "./ContactDetails";
import ProfessionalExperience from "./ProfessionalExperience";
import Header from "./Header";
import Buttons from "./Buttons";


const initialState = {
  works: [],
  company: "",
  location: "",
  from: "",
  to: "",
  jd: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "work":
      console.log("testss", action.payload);
      return { ...state, company: action.payload };
    case "location":
      return { ...state, location: action.payload };
    case "from":
      return { ...state, from: action.payload };
    case "to":
      return { ...state, to: action.payload };
    case "jd":
      return { ...state, jd: action.payload };
    default:
      return state;
  }
};

function UserForm() {
  const { step } = useSelector((state) => state.buttonReducer);
  console.log("btn reducer", step);
  switch (step) {
    case 1:
      return (
        <>
          <Header />
          <ContactDetails />
          <Buttons />
        </>
      );
    case 2:
      return (
        <>
          <Header />
          <ProfessionalExperience />
          <Buttons />
        </>
      );
    default:
      return "b";
  }
}

export default UserForm;
