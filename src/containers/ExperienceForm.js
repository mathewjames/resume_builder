import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Card, CardContent, TextField, Modal, Box } from "@mui/material";
import { SubmitButton } from "../components/Buttons";
import { addWork, editWork } from "../redux/actions/companyActions";

function ExperienceForm(props) {
  const initialState = props.value;
  const open = props.open;

  const [work, setWork] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    setWork({ ...initialState });
  }, [initialState]);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("props", props.edit);
    if (props.edit) {
      console.log("works", work, "initstate", initialState);
      dispatch(editWork(work, initialState));
    } else {
      console.log("edit");
      dispatch(addWork(work));
      setWork({ ...initialState });
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
                  gridTemplateColumns: "repeat(4, 1fr)",
                }}
              >
                <TextField
                  // required
                  id="company"
                  label="Company"
                  onChange={(event) => {
                    setWork({ ...work, Company: event.target.value });
                  }}
                  value={work.Company}
                  variant="filled"
                  sx={{ gridRow: "1", gridColumn: "1/4" }}
                />

                <TextField
                  // required
                  id="location"
                  label="Location"
                  onChange={(event) => {
                    setWork({ ...work, Location: event.target.value });
                  }}
                  value={work.Location}
                  variant="filled"
                  sx={{ gridRow: "1", gridColumn: "4/5" }}
                />

                <TextField
                  // required
                  id="designation"
                  type="designation"
                  label="Designation"
                  onChange={(event) => {
                    setWork({ ...work, Designation: event.target.value });
                  }}
                  value={work.Designation}
                  variant="filled"
                  sx={{ gridRow: "2", gridColumn: "1/3" }}
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
                    setWork({ ...work, From: event.target.value });
                  }}
                  value={work.From}
                  variant="filled"
                  sx={{ gridRow: "2", gridColumn: "3/4" }}
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
                    setWork({ ...work, To: event.target.value });
                  }}
                  value={work.To}
                  variant="filled"
                  sx={{ gridRow: "2", gridColumn: "4/5" }}
                />

                <TextField
                  // required
                  id="jd"
                  label="Job Description"
                  multiline
                  type="url"
                  onChange={(event) => {
                    setWork({ ...work, "Job Description": event.target.value });
                  }}
                  value={work["Job Description"]}
                  variant="filled"
                  sx={{ gridRow: "3", gridColumn: "span 4" }}
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
}

export default ExperienceForm;
