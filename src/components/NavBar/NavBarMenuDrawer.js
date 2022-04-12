import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import MenuDrawer from '../MenuDrawer'

export function NavBar({pageTitle}) {
  const [menuOpen, setMenuOpen] = useState(false);  
  const handleClick = () => {
      setMenuOpen((prev) => !prev);
  }
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
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {pageTitle}
      </Typography>
      <Button color="inherit" component={Link} to="/">Logout</Button>
      <MenuDrawer menuOpen={menuOpen} closeMenu={handleClick}></MenuDrawer>
    </Toolbar>
  </AppBar>
  );
}