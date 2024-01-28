import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import styled from "@emotion/styled";

const StyledListItemText = styled(ListItemText)({
  color: "rgb(187, 187, 187)",
});

const Sidebar = ({ sidebarDisplay }) => {
  return (
    <Box
      p={0}
      sx={{
        display: { xs: sidebarDisplay, sm: "block" },
      }}
    >
      <Box
        sx={{
          bgcolor: "rgb(43, 47, 51)",
          height: "100vh",
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Fundamentals">
              <StyledListItemText primary="Introduction" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Fundamentals">
              <StyledListItemText primary="Fundamentals" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Talents">
              <StyledListItemText primary="Talents" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Gearing & Consumables">
              <StyledListItemText primary="Gearing & Consumables" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Stats">
              <StyledListItemText primary="Stats" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Stats">
              <StyledListItemText primary="Ability Usage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Stats">
              <StyledListItemText primary="Build Modifications" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Stats">
              <StyledListItemText primary="Affixes" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Stats">
              <StyledListItemText primary="Macros & Addons" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
