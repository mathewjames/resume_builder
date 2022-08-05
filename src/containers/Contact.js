import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardContent, Typography, TextField, Box } from "@mui/material";

import { SubmitButton } from "../components/Buttons";
import { addContact } from "../redux/actions/contactActions";

const Contact = () => {
  const userFinal = useSelector((state) => state.contactReducer.contact);
  console.log("userfinal", userFinal);
  const [user, setUser] = useState(userFinal);
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(addContact(user));
  };
  console.log("user", user);
  return (
    <>
      <Typography variant="h5" mt={5} mb={1}>
        Contact Details
      </Typography>
      <Card sx={{ display: "inline-block", width: "70%", mb: 3 }}>
        <CardContent component="form" onSubmit={submitHandler}>
          <Box
            sx={{
              m: 4,
              display: "inline-grid",
              width: "90%",
              rowGap: 6,
              columnGap: 2,
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            <TextField
              id="first-name"
              label="First Name"
              onChange={(event) => {
                setUser({ ...user, fname: event.target.value });
              }}
              defaultValue={userFinal.fname}
              variant="filled"
            />

            <TextField
              id="last-name"
              label="Last Name"
              onChange={(event) => {
                setUser({ ...user, lname: event.target.value });
              }}
              defaultValue={userFinal.lname}
              variant="filled"
            />

            <TextField
              id="email"
              type="email"
              label="E-mail"
              onChange={(event) => {
                setUser({ ...user, email: event.target.value });
              }}
              defaultValue={userFinal.email}
              variant="filled"
            />

            <TextField
              id="mobile"
              label="Mobile No."
              onChange={(event) => {
                setUser({ ...user, mobile: event.target.value });
              }}
              defaultValue={userFinal.mobile}
              variant="filled"
            />

            <TextField
              id="linkedin"
              label="LinkedIn"
              type="url"
              onChange={(event) => {
                setUser({ ...user, linkedin: event.target.value });
              }}
              defaultValue={userFinal.linkedin}
              variant="filled"
            />

            <TextField
              id="git"
              label="GitHub"
              type="url"
              onChange={(event) => {
                setUser({ ...user, git: event.target.value });
              }}
              defaultValue={userFinal.github}
              variant="filled"
            />

            <TextField
              id="twitter"
              label="Twitter"
              type="url"
              onChange={(event) => {
                setUser({ ...user, twitter: event.target.value });
              }}
              defaultValue={userFinal.twitter}
              variant="filled"
            />

            <TextField
              id="portfolio"
              label="Portfolio"
              type="url"
              onChange={(event) => {
                setUser({ ...user, portfolio: event.target.value });
              }}
              defaultValue={userFinal.portfolio}
              variant="filled"
            />
          </Box>
          <SubmitButton />
        </CardContent>
      </Card>
    </>
  );
};

export default Contact;
