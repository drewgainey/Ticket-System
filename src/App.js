import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import SupportTicket from "./pages/SupportTicket";
import LogInSignUp from "./pages/LogInSignUp";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Route exact path="/" component={LogInSignUp} />
          <PrivateRoute path="/new" component={SupportTicket} />
          <PrivateRoute path="/home" component={Home} />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
