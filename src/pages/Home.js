import React, { useState, useEffect } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import OpenTickets from "../components/OpenTickets";

const Home = () => {
  const [tickets, setTickets] = useState([]);
  const pageTitle = "Open Tickets";

  useEffect(() => {
    fetch("http://localhost:3001/api/tickets")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  return (
    <>
      <NavBar pageTitle={pageTitle}/>
      <OpenTickets tickets={tickets}/>
    </>
  );
};

export default Home;
