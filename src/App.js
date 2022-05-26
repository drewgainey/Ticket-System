import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import SupportTicket from "./pages/SupportTicket";
import LogInSignUp from "./pages/LogInSignUp";
import SearchTickets from "./pages/SearchTickets";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: "#000000" },
    },
  });
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Route exact path="/" component={LogInSignUp} />
            <PrivateRoute path="/new" component={SupportTicket} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/search" component={SearchTickets} />
          </Router>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
