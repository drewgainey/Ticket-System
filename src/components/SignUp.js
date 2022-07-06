import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom"
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';

const SignUp = ({
  email,
  password,
  passwordConfirm,
  handleEmailChange,
  handlePasswordChange,
  handlePasswordConfirmChange,
  registrationCode,
  handleRegistrationCodeChange,
  error,
  setError,
  loading,
  setLoading
}) => {
  const { signup } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === '') {
      return setError('Please Enter a Valid Email');
    }
    if (password === '') {
      return setError('Please Enter a Valid Password');
    }
    if (password.length < 6) {
      return setError('Password Must be Atleast 6 characters Long')
    }
    if (password !== passwordConfirm) {
      return setError('Passwords Do Not Match');
    }
    if(registrationCode !== 'DEMO2022') {
      return setError('Registration Code Is Invalid');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password, registrationCode);
      setLoading(false);
    } catch {
      setError('Failed to Create Account Please Check Registration Code');
      setLoading(false);
    }
    history.push('/home')
  };
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
          value={email}
          onChange={handleEmailChange}
          fullWidth
          required
        />
        <TextField
          variant="standard"
          label="Password"
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          fullWidth
          required
        />
        <TextField
          variant="standard"
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
          fullWidth
          required
        />
        <TextField
          variant="standard"
          label="Registration Code"
          placeholder="Registration Code"
          value={registrationCode}
          onChange={handleRegistrationCodeChange}
          fullWidth
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          onClick={handleSubmit}
          style={{ marginTop: "10px" }}
          disabled={loading}
        >
          Create Account
        </Button>
        {error && <Alert severity="error" onClose={() => setError('')} sx={{marginTop: '10px'}}>{error}</Alert>}
      </Paper>
    </Grid>
  );
};

export default SignUp;
