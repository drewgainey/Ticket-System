import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TicketDashBoard } from "./pages/TicketDashBoard/TicketDashBoard";
import { TicketDetail } from "./pages/TicketDetail/TicketDetail";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import SupportTicket from "./pages/SupportTicket";
import LogInSignUp from "./pages/LogInSignUp";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          {/* Put "/" and NavBar in the switch so only the signin page will render when on the signin page and not the NavBar.
         NavBar should render for all other paths */}
          <Switch>
            <Route exact path="/">
              <LogInSignUp/>      
            </Route>
          </Switch>
          <Route path="/new">
            <SupportTicket />
          </Route>
          <Route path="/detail/:ticketNum?">
            <TicketDetail />
          </Route>
          <Route path="/dashboard">
            <TicketDashBoard />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
