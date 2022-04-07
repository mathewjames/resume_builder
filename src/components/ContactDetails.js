import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardContent, Typography, TextField, Box } from "@mui/material";
import {
  fName,
  lName,
  email,
  mobile,
  linkedin,
  github,
  twitter,
  portfolio,
} from "../redux/actions/contactActions";

function ContactDetails() {
  const user = useSelector((state) => state.contactReducer);
  console.log("user", user);
  const dispatch = useDispatch();
  return (
    <>
      <Typography variant="h5" mt={5} mb={1}>
        Contact Details
      </Typography>
      <Card sx={{ display: "inline-block", width: "70%" }}>
        <CardContent>
          <Box
            component="form"
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
              color="primary"
              id="first-name"
              label="First Name"
              onChange={(event) => {
                dispatch(fName(event.target.value));
              }}
              defaultValue={user.firstname}
              variant="filled"
            />

            <TextField
              id="last-name"
              label="Last Name"
              onChange={(event) => {
                dispatch(lName(event.target.value));
              }}
              defaultValue={user.lastname}
              variant="filled"
            />

            <TextField
              id="email"
              type="email"
              label="E-mail"
              onChange={(event) => {
                dispatch(email(event.target.value));
              }}
              defaultValue={user.email}
              variant="filled"
            />

            <TextField
              id="mobile"
              label="Mobile No."
              onChange={(event) => {
                dispatch(mobile(event.target.value));
              }}
              defaultValue={user.mobile}
              variant="filled"
            />

            <TextField
              id="linkedin"
              label="LinkedIn"
              type="url"
              onChange={(event) => {
                dispatch(linkedin(event.target.value));
              }}
              defaultValue={user.linkedin}
              variant="filled"
            />

            <TextField
              id="git"
              label="GitHub"
              type="url"
              onChange={(event) => {
                dispatch(github(event.target.value));
              }}
              defaultValue={user.github}
              variant="filled"
            />

            <TextField
              id="twitter"
              label="Twitter"
              type="url"
              onChange={(event) => {
                dispatch(twitter(event.target.value));
              }}
              defaultValue={user.twitter}
              variant="filled"
            />

            <TextField
              id="portfolio"
              label="Portfolio"
              type="url"
              onChange={(event) => {
                dispatch(portfolio(event.target.value));
              }}
              defaultValue={user.portfolio}
              variant="filled"
            />
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

{
  /* <Grid
        container
        justifyContent="space-evenly"
        mt={1}
        spacing={8}
        //columnSpacing={6}
      >
        <Grid item xs={12} sm={5}>
          <TextField
            color="primary"
            id="first-name"
            label="First Name"
            onChange={(event) => {
              userContext.userDispatch({
                type: "firstname",
                payload: event.target.value,
              });
            }}
            defaultValue={userContext.user.firstname}
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            id="last-name"
            label="Last Name"
            onChange={(event) => {
              userContext.userDispatch({
                type: "lastname",
                payload: event.target.value,
              });
            }}
            defaultValue={userContext.user.firstname}
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            id="email"
            type={"email"}
            label="E-mail"
            defaultValue=" "
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            id="mobile"
            label="Mobile No."
            defaultValue=""
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            id="linkedin"
            label="LinkedIn"
            defaultValue=""
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            id="git"
            label="GitHub"
            defaultValue=""
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            id="twitter"
            label="Twitter"
            defaultValue=""
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            id="portfolio"
            label="Portfolio"
            defaultValue=""
            variant="filled"
          />
        </Grid>
      </Grid> */
}

export default ContactDetails;
