import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" aria-label="resume">
          <ArticleIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          Resume Builder
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
