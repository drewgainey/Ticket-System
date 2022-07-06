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
  const [ticketNumFilter, setTicketNumFilter] = useState("");
  const [filterCategory, setFilterCategory] = useState(null);
  const [issueFilter, setIssueFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState(null);
  const [assignedToFilter, setAssignedToFilter] = useState(null);
  const [submittedByFilter, setSubmittedByFilter] = useState("");
  const [userTicketsOnly, setUserTicketsOnly] = useState(false);
  const pageTitle = "Olshan Properties Systems Support";
  const handleOnPageChange = (e, newPage) => {
    setPage(newPage);
  };

  const handleOnRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setPage(0);
  };

  useEffect(() => {
    fetch("https://ticketing-system-backend.herokuapp.com/api/tickets")
      .then((res) => res.json())
      .then((data) => {
        setTickets(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://ticketing-system-backend.herokuapp.com/api/categories")
      .then((res) => res.json())
      .then((data) => setCategoriesList(data));
  }, []);


  return (
    <>
      <NavBar pageTitle={pageTitle} />
      <TicketSearchBar setUserTicketsOnly={setUserTicketsOnly} />
      <AllTickets
        tickets={tickets}
        page={page}
        handleOnPageChange={handleOnPageChange}
        rowsPerPage={rowsPerPage}
        handleOnRowsPerPageChange={handleOnRowsPerPageChange}
        filterCategory={filterCategory}
        issueFilter={issueFilter}
        statusFilter={statusFilter}
        userTicketsOnly={userTicketsOnly}
        issueValue={issueFilter}
        setIssueValue={setIssueFilter}
        categories={categoriesList}
        categoriesValue={filterCategory}
        setCategoriesValue={setFilterCategory}
        statusValue={statusFilter}
        setStatusValue={setStatusFilter}
        assignedToValue={assignedToFilter}
        setAssignedToValue={setAssignedToFilter}
        submittedByValue={submittedByFilter}
        setSubmittedByValue={setSubmittedByFilter}
        ticketNumValue={ticketNumFilter}
        setTicketNumValue={setTicketNumFilter}
      />
    </>
  );
};

export default SearchTicket;
