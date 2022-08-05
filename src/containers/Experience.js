import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import ExperienceForm from "./ExperienceForm";
import { Details } from "./Details";
import { AddButton } from "../components/Buttons";

const Experience = () => {
  const initialState = {
    Company: "",
    Location: "",
    Designation: "",
    From: "",
    To: "",
    "Job Description": "",
  };
  const workExps = useSelector((state) => state.companyReducer.works);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Typography variant="h5" mt={5} mb={1}>
        Professional Experience
      </Typography>
      <Details items={workExps} dispatcher={"work"} />
      <ExperienceForm
        open={open}
        value={initialState}
        edit={false}
        onClose={handleClose}
      />
      <AddButton handleOpen={handleOpen} />
    </>
  );
};

export default Experience;
