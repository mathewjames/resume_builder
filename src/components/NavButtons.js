import React from "react";
import { useDispatch } from "react-redux";
import { Stack, Button } from "@mui/material";
import { nextPage, prevPage } from "../redux/actions/navButtonActions";

export default function NavButtons() {
  const dispatch = useDispatch();
  return (
    <Stack direction="row" spacing={2} sx={{ display: "block" }}>
      <Button
        variant="contained"
        color="secondary"
        onClick={(_event) => dispatch(prevPage())}
      >
        Previous
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={(_event) => dispatch(nextPage())}
      >
        Next
      </Button>
    </Stack>
  );
}
