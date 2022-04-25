import React, { useState, useEffect } from "react";
import { NavBar } from "../components/NavBarMenuDrawer";
import OpenTickets from "../components/OpenTickets";
import CasesByCategory from "../components/CasesByCategory";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

const Home = () => {
  const [tickets, setTickets] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [categoriesList, setCategoriesList] = useState([]);
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

  useEffect(() => {
    fetch("http://localhost:3001/api/categories")
      .then((res) => res.json())
      .then((data) => setCategoriesList(data));
  }, []);

  return (
    <>
      <NavBar pageTitle={pageTitle} />
      <Grid container spacing={2} style={{ margin: "20px auto"}}>
        <Grid item xs={6}>
          <Card variant="outlined">
            <CasesByCategory 
              tickets={tickets}
              categoriesList={categoriesList}/>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card variant="outlined">
            <OpenTickets
              tickets={tickets}
              page={page}
              handleOnPageChange={handleOnPageChange}
              rowsPerPage={rowsPerPage}
              handleOnRowsPerPageChange={handleOnRowsPerPageChange}
              title="Open Tickets Listing"
              selectRowsPP={false}
              defaultRowsPP={10}
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
