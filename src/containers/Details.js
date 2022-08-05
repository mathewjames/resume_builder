import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { EditButton, DeleteButton } from "../components/Buttons";
import ExperienceForm from "./ExperienceForm";
import { EducationForm } from "./EducationForm";
import { ProjectForm } from "./ProjectForm";
import { delEdu } from "../redux/actions/educationActions";
import { delWork } from "../redux/actions/companyActions";
import { delProj } from "../redux/actions/projectActions";

export const Details = (props) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const handleClose = () => setOpen(false);
  const displayItems = props.items;
  const dispatch = useDispatch();

  const handleEdit = (itemKey) => {
    setOpen(true);
    setFormData(props.items[itemKey]);
  };
  const handleDelete = (itemKey) => {
    console.log("dsd", props.dispatcher);
    if (props.dispatcher === "education") {
      dispatch(delEdu(itemKey));
    } else if (props.dispatcher === "work") {
      dispatch(delWork(itemKey));
    } else if (props.dispatcher === "project") {
      dispatch(delProj(itemKey));
    }
  };
  let form = [];
  if (props.dispatcher === "education") {
    form = (
      <EducationForm
        open={open}
        value={formData}
        edit={true}
        onClose={handleClose}
      />
    );
  } else if (props.dispatcher === "work") {
    form = (
      <ExperienceForm
        open={open}
        value={formData}
        edit={true}
        onClose={handleClose}
      />
    );
  } else if (props.dispatcher === "project") {
    form = (
      <ProjectForm
        open={open}
        value={formData}
        edit={true}
        onClose={handleClose}
      />
    );
  }

  const displayItemKeys = Object.keys(displayItems);
  const styles = {
    project: {
      mr: "auto",
      ml: 0,
      width: "50%",
    },
    skills: {
      ml: "auto",
      mr: 0,
      width: "50%",
    },
    education: {
      width: "80%",
      margin: "auto",
    },
    work: {
      width: "80%",
      margin: "auto",
    },
  };
  const works = displayItemKeys.map((displayItemKey) => {
    const displayItemList = [];
    for (const displayItem in displayItems[displayItemKey]) {
      displayItemList.push(
        <ListItem key={displayItem}>
          <ListItemText
            primary={displayItem}
            secondary={displayItems[displayItemKey][displayItem]}
          />
        </ListItem>
      );
    }

    return (
      <Box key={displayItemKey} sx={styles[props.dispatcher]}>
        <Card>
          <CardContent>
            <List>{displayItemList}</List>
            <EditButton handleEdit={() => handleEdit(displayItemKey)} />
            <DeleteButton handleDelete={() => handleDelete(displayItemKey)} />
          </CardContent>
        </Card>
        <Divider variant="inset" />
      </Box>
    );
  });
  return (
    <>
      {works}
      {form}
    </>
  );
};
