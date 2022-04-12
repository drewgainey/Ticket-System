import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
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
          <Avatar style={{ backgroundColor: "#1976d2" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            Support Portal
          </Typography>
          <Typography variant="subtitle1">New User Sign Up</Typography>
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
        <TextField
          variant="standard"
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
          fullWidth
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          component={Link}
          to="/home"
          style={{marginTop: "10px"}}
        >
         Create Account
        </Button>
      </Paper>
    </Grid>
  );
};

export default SignUp;
