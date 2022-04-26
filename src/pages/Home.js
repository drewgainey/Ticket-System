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
  const [cardOneExpand, setCardOneExpand] = useState(false);
  const [cardTwoExpand, setCardTwoExpand] = useState(false);
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
      <div style={{marginRight: "20px"}}>
      <Grid container spacing={2} style={{ margin: "10px 0px 10px auto" }}>
        {!cardTwoExpand && (
          <Grid item xs={cardOneExpand? 12 : 6}>
            <Card variant="outlined">
              <CasesByCategory
                tickets={tickets}
                categoriesList={categoriesList}
                expand={cardOneExpand}
                setExpand={setCardOneExpand}
              />
            </Card>
          </Grid>
        )}
        {!cardOneExpand && (
          <Grid item xs={cardTwoExpand? 12 : 6}>
            <Card variant="outlined">
              <OpenTickets
                tickets={tickets}
                page={page}
                handleOnPageChange={handleOnPageChange}
                rowsPerPage={rowsPerPage}
                handleOnRowsPerPageChange={handleOnRowsPerPageChange}
                title="Open Tickets Listing"
                defaultRowsPP={10}
                expand={cardTwoExpand}
                setExpand={setCardTwoExpand}
              />
            </Card>
          </Grid>
        )}
      </Grid>
      </div>
    </>
  );
};

export default Home;
