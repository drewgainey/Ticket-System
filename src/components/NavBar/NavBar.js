import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export function NavBar({pageTitle}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="sticky">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu 
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }} >
        <MenuItem component={Link} to="/new">New Ticket</MenuItem>
        <MenuItem component={Link} to="/home">Open Tickets</MenuItem>
      </Menu>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {pageTitle}
      </Typography>
      <Button color="inherit" component={Link} to="/">Logout</Button>
    </Toolbar>
  </AppBar>
  );
}
