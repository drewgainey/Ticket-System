import React from "react";
import { useState, useEffect } from "react";
import { NavBar } from "../components/NavBarMenuDrawer";
import AllTickets from "../components/AllTickets";
import TicketSearchBar from "../components/TicketSearchBar";

const SearchTicket = () => {
  const [tickets, setTickets] = useState([]);
  const [categoriesList, setCategoriesList] = useState(["loading"]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filterCategory, setFilterCategory] = useState(null);
  const [issueFilter, setIssueFilter] = useState("");

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

  useEffect(() => {
    fetch("http://localhost:3001/api/categories")
      .then((res) => res.json())
      .then((data) => setCategoriesList(data));
  }, []);

  return (
    <>
      <NavBar />
      <TicketSearchBar
        categories={categoriesList}
        categoriesValue={filterCategory}
        setCategoriesValue={setFilterCategory}
        issueValue={issueFilter}
        setIssueValue={setIssueFilter}
      />
        <AllTickets
          tickets={tickets}
          page={page}
          handleOnPageChange={handleOnPageChange}
          rowsPerPage={rowsPerPage}
          handleOnRowsPerPageChange={handleOnRowsPerPageChange}
          filterCategory={filterCategory}
          issueFilter={issueFilter}
        />
    </>
  );
};

export default SearchTicket;
