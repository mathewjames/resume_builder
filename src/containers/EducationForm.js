import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Card, CardContent, TextField, Box, Modal } from "@mui/material";
import { SubmitButton } from "../components/Buttons";
import { addEdu, editEdu } from "../redux/actions/educationActions";

export const EducationForm = (props) => {
  const initialState = props.value;
  const open = props.open;

  const [edu, setEdu] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    setEdu({ ...initialState });
  }, [initialState]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (props.edit) {
      dispatch(editEdu(edu, initialState));
    } else {
      dispatch(addEdu(edu));
      setEdu({ ...initialState });
    }
  };

  return (
    <>
      <Modal open={open} onClose={props.onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Card>
            <CardContent component="form" onSubmit={submitHandler}>
              <Box
                sx={{
                  m: 4,
                  display: "inline-grid",
                  width: "90%",
                  rowGap: 6,
                  columnGap: 2,
                  gridTemplateColumns: "repeat(3, 1fr)",
                }}
              >
                <TextField
                  // required
                  id="insitution"
                  label="Institution"
                  onChange={(event) => {
                    setEdu({ ...edu, Institution: event.target.value });
                  }}
                  value={edu.Institution}
                  variant="filled"
                  sx={{ gridRow: "1", gridColumn: "span 3" }}
                />

                <TextField
                  // required
                  id="degree"
                  label="Degree"
                  onChange={(event) => {
                    setEdu({ ...edu, Degree: event.target.value });
                  }}
                  value={edu.Degree}
                  variant="filled"
                  sx={{ gridRow: "2", gridColumn: "1/3" }}
                />

                <TextField
                  // required
                  id="location"
                  label="Location"
                  onChange={(event) => {
                    setEdu({ ...edu, Location: event.target.value });
                  }}
                  value={edu.Location}
                  variant="filled"
                  sx={{ gridRow: "2", gridColumn: "3/4" }}
                />

                <TextField
                  // required
                  id="grade"
                  type="designation"
                  label="Grade"
                  onChange={(event) => {
                    setEdu({ ...edu, Grade: event.target.value });
                  }}
                  value={edu.Grade}
                  variant="filled"
                />

                <TextField
                  // required
                  id="from"
                  label="From"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(event) => {
                    setEdu({ ...edu, From: event.target.value });
                  }}
                  value={edu.From}
                  variant="filled"
                />

                <TextField
                  // required
                  id="to"
                  label="To"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(event) => {
                    setEdu({ ...edu, To: event.target.value });
                  }}
                  value={edu.To}
                  variant="filled"
                />

                <TextField
                  // required
                  id="acheivements"
                  label="Acheivements"
                  multiline
                  type="url"
                  onChange={(event) => {
                    setEdu({ ...edu, Acheivements: event.target.value });
                  }}
                  value={edu["Acheivements"]}
                  variant="filled"
                  sx={{ gridRow: "4", gridColumn: "span 3" }}
                />
              </Box>
              <Box sx={{ width: "15%", m: "auto" }}>
                <SubmitButton text={props.edit ? "Save Edits" : "Submit"} />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </>
  );
};
