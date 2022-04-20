import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const LogInSignUp = () => {
  const [value, setValue] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [registrationCode, setRegistrationCode] = useState("");
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };
  const handleRegistrationCodeChange = (e) => {
    setRegistrationCode(e.target.value);
  }

  const paperStyle = {
    width: 320,
    margin: "20px auto",
  };

  return (
    <Paper elevation={20} style={paperStyle}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        <Tab label="Sign In" style={{ width: 160 }} />
        <Tab label="Sign Up" style={{ width: 160 }} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <LogIn
          email={email}
          password={password}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          error={error}
          setError={setError}
          loading={loading}
          setLoading={setLoading}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUp
          email={email}
          password={password}
          passwordConfirm={passwordConfirm}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handlePasswordConfirmChange={handlePasswordConfirmChange}
          registrationCode={registrationCode}
          handleRegistrationCodeChange={handleRegistrationCodeChange}
          error={error}
          setError={setError}
          loading={loading}
          setLoading={setLoading}
        />
      </TabPanel>
    </Paper>
  );
};

export default LogInSignUp;
