import React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

const CasesByCategory = ({ tickets, categoriesList }) => {
  const [categoryStats, setCategoryStats] = useState([]);

  const countTicketsByCategory = (category) => {
    return tickets.filter(
      (ticket) => ticket.category.toLowerCase() === category.toLowerCase()
    ).length;
  };

  const countTicketsByCategoryAndStatus = (category, status) => {
    const filterByCategory = tickets.filter(
      (ticket) => ticket.category.toLowerCase() === category.toLowerCase()
    );
    const filterByCategoryAndPriority = filterByCategory.filter(
      (ticket) => ticket.status.toLowerCase() === status.toLowerCase()
    );
    return filterByCategoryAndPriority.length;
  };

  useEffect(() => {
    setCategoryStats(
      categoriesList.map((cat) => {
        return {
          category: cat,
          open: countTicketsByCategory(cat),
          escalated: countTicketsByCategoryAndStatus(cat, "escalated"),
          inProgress: countTicketsByCategoryAndStatus(cat, "In Progress"),
          unreviewed: countTicketsByCategoryAndStatus(cat, "unreviewed"),
        };
      })
    );
  }, [categoriesList]);

  return (
    <TableContainer component={Paper}>
      <Toolbar sx={{ backgroundColor: "primary.main" }}>
        <Typography variant="h6" style={{color:"#f3e5f5"}}>
          Open Tickets By Category
        </Typography>
      </Toolbar>
      <Table sx={{ minWidth: 650 }} stickyHeader={true}>
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align="center">Open</TableCell>
            <TableCell align="center">Escalated</TableCell>
            <TableCell align="center">In Progress</TableCell>
            <TableCell align="center">Unreviewed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categoryStats.map((cat) => (
            <TableRow>
              <TableCell align="left">{cat.category}</TableCell>
              <TableCell align="center">{cat.open}</TableCell>
              <TableCell align="center">{cat.escalated}</TableCell>
              <TableCell align="center">{cat.inProgress}</TableCell>
              <TableCell align="center">{cat.unreviewed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CasesByCategory;
