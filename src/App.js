import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { SignIn } from "./pages/SignIn/SignIn";
import { TicketDashBoard } from "./pages/TicketDashBoard/TicketDashBoard";
import { TicketDetail } from "./pages/TicketDetail/TicketDetail";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Put "/" and NavBar in the switch so only the signin page will render when on the signin page and not the NavBar.
         NavBar should render for all other paths */}
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route>
            <NavBar />
          </Route>
        </Switch>
        
        <Route path="/detail">
          <TicketDetail />
        </Route>
        <Route path="/dashboard">
          <TicketDashBoard />
        </Route>
      </Router>
    </div>
  );
}

export default App;