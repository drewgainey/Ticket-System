import React, { useState, useEffect } from "react";
import OpenTickets from "../components/OpenTickets";

const Home = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/tickets")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  return (
    <>
      <OpenTickets tickets={tickets}/>
    </>
  );
};

export default Home;
