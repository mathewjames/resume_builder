import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { ProjectForm } from "./ProjectForm";
import { SkillsForm } from "./SkillsForm";
import { Details } from "./Details";
import { SkillsList } from "./SkillsList";
import { AddButton } from "../components/Buttons";

export const ProjectsSkills = () => {
  const initialProjectState = {
    Name: "",
    Description: "",
    Additional: "",
  };
  const initialSkillState = {
    Technical: [],
    NonTechnical: [],
  };
  const projects = useSelector((state) => state.projectReducer.projects);
  const [projOpen, setProjOpen] = useState(false);
  const handleProjOpen = () => setProjOpen(true);
  const handleProjClose = () => setProjOpen(false);
  const skills = useSelector((state) => state.skillReducer.skills);
  const [skillOpen, setSkillOpen] = useState(false);
  const handleSkillOpen = () => setSkillOpen(true);
  const handleSkillClose = () => setSkillOpen(false);
  // const [skillOpen, setSkillOpen] = useState(false);
  //console.log("Opem", projOpen);
  // const handleSkillOpen = () => setSkillOpen(true);
  // const handleSkillClose = () => setSkillOpen(false);
  return (
    <>
      <Typography variant="h4" mt={5} mb={1}>
        Skills
      </Typography>
      <SkillsList items={skills} dispatcher={"skill"} />
      <SkillsForm
        open={skillOpen}
        value={initialSkillState}
        edit={false}
        onClose={handleSkillClose}
      />
      <AddButton handleOpen={handleSkillOpen} />
      <Typography variant="h4" mt={5} mb={1}>
        Projects
      </Typography>
      <Details items={projects} dispatcher={"project"} />
      <ProjectForm
        open={projOpen}
        value={initialProjectState}
        edit={false}
        onClose={handleProjClose}
      />
      <AddButton handleOpen={handleProjOpen} />
    </>
  );
};
