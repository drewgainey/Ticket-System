import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const CasesByCategory = ({ tickets, categoriesList }) => {

//create buckets of categories and priorities    
const categoryStats = [];
categoriesList.forEach((cat) => {
    categoryStats.push({
        category: cat,
        open: 0,
        critical: 0,
        high: 0,
        medium: 0,
        low: 0,
    });
}); 

//go through each ticket and increase the apropriate bucket count by 1
tickets.forEach((ticket) => {
    let statsArrIndex = categoriesList.indexOf(ticket.category);
});

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} stickyHeader={true}>
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align="left">Open</TableCell>
            <TableCell align="left">Critical</TableCell>
            <TableCell align="left">High</TableCell>
            <TableCell align="left">Medium</TableCell>
            <TableCell align="left">Low</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categoryStats.map((cat) => (
            <TableRow>
              <TableCell align="left">{cat.category}</TableCell>
              <TableCell align="left">{cat.open}</TableCell>
              <TableCell align="left">{cat.critical}</TableCell>
              <TableCell align="left">{cat.high}</TableCell>
              <TableCell align="left">{cat.medium}</TableCell>
              <TableCell align="left">{cat.low}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CasesByCategory;
