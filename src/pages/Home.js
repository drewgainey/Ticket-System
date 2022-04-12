import React, { useState, useEffect } from "react";
import { NavBar } from "../components/NavBar/NavBarMenuDrawer";
import OpenTickets from "../components/OpenTickets";

const Home = () => {
  const [tickets, setTickets] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const pageTitle = "Open Tickets";

  const handleOnPageChange = (e, newPage) => {
    setPage(newPage);
  };

  const handleOnRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setPage(0);
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/tickets")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  return (
    <>
      <NavBar pageTitle={pageTitle} />
      <OpenTickets
        tickets={tickets}
        page={page}
        handleOnPageChange={handleOnPageChange}
        rowsPerPage={rowsPerPage}
        handleOnRowsPerPageChange={handleOnRowsPerPageChange}
      />
    </>
  );
};

export default Home;
