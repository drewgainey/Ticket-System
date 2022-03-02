import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { TicketDashBoard } from "./pages/TicketDashBoard/TicketDashBoard";
import { TicketDetail } from './pages/TicketDetail/TicketDetail';

function App() {
  return (
    <div className="App">
      <div id="sign in page"></div> {/* only page without nav bar*/}
      <NavBar />
      {/* <TicketDashBoard /> */}
      <TicketDetail />
    </div>
  );
}

export default App;
