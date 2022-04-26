import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import { Link, useHistory } from "react-router-dom";

const MenuDrawer = ({ menuOpen, closeMenu }) => {
  const { signout } = useAuth();
  const history = useHistory();

  const handleLogOut = () => {
    signout();
    history.push("/");
  };

  return (
    <Drawer variant="persistent" anchor="left" open={menuOpen}>
      <List>
        <ListItemButton onClick={closeMenu}>
          <ListItemText primary="Close Menu" />
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton component={Link} to="/Home">
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton component={Link} to="/new">
          <ListItemText primary="New Ticket" />
        </ListItemButton>
        <ListItemButton component={Link} to="/search">
          <ListItemText primary="Search Tickets" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Ticket Manager" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="User Manager" />
        </ListItemButton>
        <ListItemButton onClick={handleLogOut}>
          <ListItemText primary="Log Out" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default MenuDrawer;
