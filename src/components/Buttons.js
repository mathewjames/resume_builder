import React from "react";
import { Box, Button, IconButton } from "@mui/material";

import BeenhereIcon from "@mui/icons-material/Beenhere";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const SubmitButton = (props) => {
  return (
    <Button variant="contained" type="submit" endIcon={<BeenhereIcon />}>
      {props.text}
    </Button>
  );
};

export const EditButton = (props) => {
  return (
    <IconButton variant="contained" color="warning" onClick={props.handleEdit}>
      <EditIcon />
    </IconButton>
  );
};

export const DeleteButton = (props) => {
  return (
    <IconButton variant="contained" color="error" onClick={props.handleDelete}>
      <DeleteForeverIcon />
    </IconButton>
  );
};

export const AddButton = (props) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Button
        variant="text"
        size="large"
        endIcon={<AddCircleOutlineIcon />}
        onClick={props.handleOpen}
      >
        Add
      </Button>
    </Box>
  );
};
