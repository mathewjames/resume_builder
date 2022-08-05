import React from "react";
import { useDispatch } from "react-redux";
import { Box, Chip, Divider, Grid, Typography } from "@mui/material";
import { delSkill } from "../redux/actions/skillActions";

export const SkillsList = (props) => {
  const techItems = props.items.Technical;
  const nonTechItems = props.items.NonTechnical;
  console.log("items", techItems);

  const dispatch = useDispatch();

  const handleDelete = (itemKey) => {
    console.log("dsd", props.dispatcher);
    dispatch(delSkill(itemKey));
  };

  const styles = {
    skills: {
      margin: "auto",
      width: "50%",
    },
  };

  //console.log("OPEN", open,"form", formData);
  return (
    <>
      <Box sx={styles.skills}>
        <Typography variant="h6">Technical</Typography>
        <Grid container spacing={1} sx={{ mb: 2 }}>
          {techItems.map((item) => (
            <Grid item xs={6} md={2} sx={{ margin: "auto" }}>
              <Chip
                key={item}
                label={item}
                onDelete={() => handleDelete(item)}
                sx={{ minWidth: item.length > 10 ? "150px" : "30px" }}
              />
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ margin: "auto" }} />
        <Typography variant="h6">Non-Technical</Typography>
        <Grid container columnSpacing={1} sx={{ mb: 1 }}>
          {nonTechItems.map((item) => (
            <Grid item xs={6} md={3} sx={{ margin: "auto" }}>
              <Chip
                key={item}
                label={item}
                onDelete={() => handleDelete(item)}
                sx={{ minWidth: item.length > 12 ? "170px" : "30px" }}
              />
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ margin: "auto" }} />
      </Box>
    </>
  );
};
