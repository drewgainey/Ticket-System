import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

const OpenTickets = ({
  tickets,
  page,
  handleOnPageChange,
  rowsPerPage,
  handleOnRowsPerPageChange,
  title,
  defaultRowsPP,
  expand,
  setExpand
}) => {
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
  const handleCardExpand = () => {
    setExpand(!expand);
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Toolbar sx={{ backgroundColor: "primary.main" }}>
          <Typography variant="h6" style={{ color: "#f3e5f5" }}>
            {title}
          </Typography>
          <Tooltip title="expand">
          <IconButton onClick={handleCardExpand}>
            <AspectRatioOutlinedIcon sx={{ color: "#f3e5f5" }} />
          </IconButton>
        </Tooltip>
        </Toolbar>
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
              .slice(
                page * (expand ? rowsPerPage : defaultRowsPP),
                page * (expand ? rowsPerPage : defaultRowsPP) +
                  (expand ? rowsPerPage : defaultRowsPP)
              )
              .map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.ticketNum}</TableCell>
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
        rowsPerPageOptions={expand && [5, 10, 50]}
        component="div"
        count={rows.length}
        rowsPerPage={expand ? rowsPerPage : defaultRowsPP}
        page={page}
        onPageChange={handleOnPageChange}
        onRowsPerPageChange={handleOnRowsPerPageChange}
      />
    </>
  );
};

export default OpenTickets;
