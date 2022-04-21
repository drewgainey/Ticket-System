import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

const LogIn = ({
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
  error,
  setError,
  loading,
  setLoading,
}) => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "0 auto",
  };
  const { signin } = useAuth();
  const history = useHistory();

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");
      await signin(email, password);
    } catch {
      setError("Username or Password is Incorrect");
      setLoading(false);
      return;
    }
    setLoading(false);
    history.push("/home");
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
          <Typography variant="subtitle1">Sign In</Typography>
        </Grid>
        <TextField
          variant="standard"
          label="Email"
          placeholder="Enter Email"
          onChange={handleEmailChange}
          fullWidth
          required
        />
        <TextField
          variant="standard"
          label="Password"
          placeholder="Enter Password"
          type="password"
          onChange={handlePasswordChange}
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Remember Me"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          disabled={loading}
          onClick={handleLogin}
        >
          Sign In
        </Button>
        {error && (
          <Alert
            severity="error"
            onClose={() => setError("")}
            sx={{ marginTop: "10px" }}
          >
            {error}
          </Alert>
        )}
      </Paper>
    </Grid>
  );
};

export default LogIn;
