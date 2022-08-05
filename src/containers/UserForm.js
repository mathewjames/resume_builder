import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";
import Experience from "./Experience";
import Education from "./Education";
import { ProjectsSkills } from "./ProjectsSkills";
import Header from "../components/Header";
import NavButtons from "../components/NavButtons";

function UserForm() {
  const { step } = useSelector((state) => state.buttonReducer);
  switch (step) {
    // case 1:
    //   return (
    //     <>
    //       <Header />
    //       <Contact />
    //       <NavButtons />
    //     </>
    //   );
    // case 1:
    //   return (
    //     <>
    //       <Header />
    //       <Experience />
    //       <NavButtons />
    //     </>
    //   );
    case 1:
      return (
        <>
          <Header />
          <Education />
          <NavButtons />
        </>
      );
    // case 1:
    //   return (
    //     <>
    //       <Header />
    //       <ProjectsSkills />
    //       <NavButtons />
    //     </>
    //   );
    default:
      return "b";
  }
}

export default UserForm;
