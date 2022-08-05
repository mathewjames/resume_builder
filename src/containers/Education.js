import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { EducationForm } from "./EducationForm";
import { Details } from "./Details";
import { AddButton } from "../components/Buttons";

const Education = () => {
  const initialState = {
    Institution: "",
    Location: "",
    Degree: "",
    From: "",
    To: "",
    Acheivements: "",
  };
  const eduInsts = useSelector((state) => state.educationReducer.education);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Typography variant="h5" mt={5} mb={1}>
        Education Details
      </Typography>
      <Details items={eduInsts} dispatcher={"education"} />
      <EducationForm
        open={open}
        value={initialState}
        edit={false}
        onClose={handleClose}
      />
      <AddButton handleOpen={handleOpen} />
    </>
  );
};

export default Education;
