import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          10.2 Blood Death Knight Advanced M+ Guide
        </Typography>
        <WaterDropIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <IconButton onClick={toggleSidebar}>
          <MenuIcon
            sx={{ color: "white", display: { xs: "block", sm: "none" } }}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
