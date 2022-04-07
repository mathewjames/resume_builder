import React from "react";
import { useContext, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  Button,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { UserContext } from "./UserForm";

function ProfessionalExperience() {
  const [company, setCompany] = useState("");
  const [otherVal, setOtherVal] = useState("");
  const [companies, setCompanies] = useState(1);
  const companyForms = [];
  //console.log("test", companies);

//   const onChange = (event) => {
//     console.log("onch", company);
//     if (company != "") {
//       userContext.userDispatch({
//         type: "work",
//         payload: [{ [company]: { [event.target.id]: event.target.value } }],
//       });
//     }
//   };
  for (let company = 0; company < companies; company++) {
    companyForms.push(
      <Card sx={{ display: "inline-block", width: "70%", mb: 3 }} key={company}>
        <CardContent>
          <Box
            component="form"
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
              color="primary"
              id="company"
              label="Company"
            //   onChange={(event) => setCompany(event.target.value)}
            //   defaultValue={userContext.user.company}
              variant="filled"
              sx={{ gridRow: "1", gridColumn: "1/4" }}
            />

            <TextField
              id="location"
              label="Location"
            //   onChange={onChange}
            //   defaultValue={userContext.user.location}
              variant="filled"
              sx={{ gridRow: "1", gridColumn: "4/5" }}
            />

            <TextField
              id="designation"
              type="designation"
              label="Designation"
            //   onChange={onChange}
            //   defaultValue={userContext.user.designation}
              variant="filled"
              sx={{ gridRow: "2", gridColumn: "1/3" }}
            />

            <TextField
              id="from"
              label="From"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            //   onChange={onChange}
            //   defaultValue={userContext.user.from}
              variant="filled"
              sx={{ gridRow: "2", gridColumn: "3/4" }}
            />

            <TextField
              id="to"
              label="To"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            //   onChange={onChange}
            //   defaultValue={userContext.user.to}
              variant="filled"
              sx={{ gridRow: "2", gridColumn: "4/5" }}
            />

            <TextField
              id="jd"
              label="Job Description"
              multiline
              type="url"
            //   onChange={onChange}
            //   defaultValue={userContext.user.jd}
              variant="filled"
              sx={{ gridRow: "3", gridColumn: "span 4" }}
            />
          </Box>
        </CardContent>
      </Card>
    );
  }
  return (
    <>
      <Typography variant="h5" mt={5} mb={1}>
        Professional Experience
      </Typography>
      {companyForms}
      <Box sx={{ mb: 3 }}>
        <Button
          variant="text"
          size="large"
          endIcon={<AddCircleOutlineIcon />}
          onClick={(event) => setCompanies(companies + 1)}
        >
          Add
        </Button>
      </Box>
    </>
  );
}

export default ProfessionalExperience;
