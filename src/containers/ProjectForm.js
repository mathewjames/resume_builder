import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Card, CardContent, Modal, TextField } from "@mui/material";
import { SubmitButton } from "../components/Buttons";
import { addProj, editProj } from "../redux/actions/projectActions";

export const ProjectForm = (props) => {
  const initialState = props.value;

  const [proj, setProj] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    setProj({ ...initialState });
  }, [initialState]);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("props", props.edit);
    if (props.edit) {
      console.log("projs", proj, "initstate", initialState);
      dispatch(editProj(proj, initialState));
    } else {
      console.log("edit");
      dispatch(addProj(proj));
      setProj({ ...initialState });
    }
  };
  return (
    <>
      <Modal open={props.open} onClose={props.onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Card>
            <CardContent component="form" onSubmit={submitHandler}>
              <Box
                sx={{
                  display: "inline-grid",
                  rowGap: 2,
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <TextField
                  id="name"
                  label="Name"
                  variant="filled"
                  onChange={(event) => {
                    setProj({
                      ...proj,
                      Name: event.target.value,
                    });
                  }}
                  value={proj.Name}
                  sx={{ mx: 40, gridColumn: "1/3" }}
                />
                <TextField
                  id="desc"
                  label="Description"
                  variant="filled"
                  onChange={(event) => {
                    setProj({
                      ...proj,
                      Description: event.target.value,
                    });
                  }}
                  value={proj.Description}
                  multiline
                  sx={{ gridColumn: "1/3" }}
                />
                <TextField
                  id="additional"
                  label="Additional Info:"
                  variant="filled"
                  onChange={(event) => {
                    setProj({
                      ...proj,
                      Additional: event.target.value,
                    });
                  }}
                  value={proj.Additional}
                  sx={{ mx: 30, gridColumn: "1/3" }}
                />
              </Box>
              <Box sx={{ width: "15%", mx: "auto", mt: 2 }}>
                <SubmitButton text={props.edit ? "Save Edits" : "Submit"} />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </>
  );
};
