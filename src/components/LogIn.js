import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const LogIn = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "0 auto",
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "#1976d2"}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            Support Portal
          </Typography>
          <Typography variant="subtitle1">Sign In</Typography>
        </Grid>
        <TextField
          variant="standard"
          label="Email"
          placeholder="Enter Email"
          fullWidth
          required
        />
        <TextField
          variant="standard"
          label="Password"
          placeholder="Enter Password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Remember Me"
        />
        <Button variant="contained" color="primary" type="submit" fullWidth component={Link} to="/home">
          Sign In
        </Button>
        {/* <Typography>Forgot Password?</Typography> */}
      </Paper>
    </Grid>
  );
};

export default LogIn;
