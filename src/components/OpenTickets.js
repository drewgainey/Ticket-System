import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { Link } from "react-router-dom";

const OpenTickets = ({ tickets, page, handleOnPageChange, rowsPerPage, handleOnRowsPerPageChange }) => {
  
  const createData = ({
    ticketNum,
    issue,
    category,
    status,
    submittedBy,
    _id,
  }) => {
    return { ticketNum, issue, category, status, submittedBy, _id };
  };
  const rows = tickets.map((ticket) => {
    return createData(ticket);
  });

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} stickyHeader={true}>
          <TableHead>
            <TableRow>
              <TableCell>Ticket #</TableCell>
              <TableCell align="left">Issue</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Submitted By</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component={Link} to={`/detail/${row.ticketNum}`}>
                  {row.ticketNum}
                </TableCell>
                <TableCell align="left">{row.issue}</TableCell>
                <TableCell align="left">{row.category}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left">{row.submittedBy}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination 
        rowsPerPageOptions={[5, 10, 50]}
        component="div" 
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleOnPageChange}
        onRowsPerPageChange={handleOnRowsPerPageChange} />
    </>
  );
};

export default OpenTickets;
