import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

const MenuDrawer = ({ menuOpen, closeMenu }) => {
  return (
    <Drawer variant="persistent" anchor="left" open={menuOpen}>
      <List>
          <ListItemButton onClick={closeMenu}>
            <ListItemText primary="Close Menu"/>
          </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton component={Link} to="/new">
          <ListItemText primary="New Ticket" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Road Map" />
        </ListItemButton>
        <ListItemButton component={Link} to="/">
          <ListItemText primary="Log Out" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default MenuDrawer;
