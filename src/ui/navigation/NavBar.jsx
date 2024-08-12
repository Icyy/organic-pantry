import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import logo from "../../Assets/logo.png";

const NavBar = () => {
  return (
    <AppBar
      position="static"
      style={{ margin: 0, padding: 0, width: "100%", boxShadow: "none" }}
    >
      <Toolbar style={{ padding: 0, minHeight: "56px" }}>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img
            src={logo} // Replace with your logo URL
            alt="Organic Pantry Logo"
            style={{ marginRight: "10px", width: "40px", height: "40px" }}
          />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Organic Pantry
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
