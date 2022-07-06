import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const AllTickets = ({
  tickets,
  page,
  handleOnPageChange,
  rowsPerPage,
  handleOnRowsPerPageChange,
  filterCategory,
  issueFilter,
  statusFilter,
  userTicketsOnly,
  issueValue,
  setIssueValue,
  categories,
  categoriesValue,
  setCategoriesValue,
  statusValue,
  setStatusValue,
  assignedToValue,
  setAssignedToValue,
  submittedByValue,
  setSubmittedByValue,
  ticketNumValue,
  setTicketNumValue
}) => {
  const { currentUser } = useAuth();

  const createData = ({
    ticketNum,
    issue,
    category,
    status,
    submittedBy,
    assignedTo,
    _id,
  }) => {
    return { ticketNum, issue, category, status, submittedBy, assignedTo, _id };
  };

  const rows = tickets.map((ticket) => {
    return createData(ticket);
  });
  const handleTicketNumChange = (event) => {
    setTicketNumValue(event.target.value);
  }
  const handleIssueChange = (event) => {
    setIssueValue(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategoriesValue(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatusValue(event.target.value);
  };
  const handleAssignedToChange = (event) => {
    setAssignedToValue(event.target.value);
  };
  const handleSumbittedByChange = (event) => {
    setSubmittedByValue(event.target.value);
  };

  const statuses = [];
  const assignedToList = [];
  tickets.forEach((ticket) => {
    if (statuses.includes(ticket.status) === false) {
      statuses.push(ticket.status);
    }
    if (assignedToList.includes(ticket.assignedTo) === false) {
      assignedToList.push(ticket.assignedTo);
    }
  });

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} stickyHeader={true}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: "#C9C6C3",
                  color: "primary.main",
                  borderBottom: "none",
                  width: 100
                }}
              >
                  <FormControl >
                  <TextField
                    value={ticketNumValue}
                    onChange={handleTicketNumChange}
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#C9C6C3",
                  color: "primary.main",
                  borderBottom: "none",
                }}
                align="left"
              >
                <FormControl>
                  <TextField
                    value={issueValue}
                    onChange={handleIssueChange}
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  backgroundColor: "#C9C6C3",
                  color: "primary.main",
                  borderBottom: "none",
                }}
              >
                <FormControl fullwidth>
                  <Select
                    value={categoriesValue}
                    onChange={handleCategoryChange}
                    size="small"
                    displayEmpty
                  >
                    {categories.map((cat) => (
                      <MenuItem value={cat}>{cat}</MenuItem>
                    ))}
                    <MenuItem value={null}>All Categories</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  backgroundColor: "#C9C6C3",
                  color: "primary.main",
                  borderBottom: "none",
                }}
              >
                <FormControl size="small">
                  <Select
                    value={statusValue}
                    onChange={handleStatusChange}
                    size="small"
                    displayEmpty
                  >
                    {statuses.map((status) => (
                      <MenuItem value={status}>{status}</MenuItem>
                    ))}
                    <MenuItem value={null}>All</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  backgroundColor: "#C9C6C3",
                  color: "primary.main",
                  borderBottom: "none",
                }}
              >
                <FormControl>
                  <Select
                    value={assignedToValue}
                    onChange={handleAssignedToChange}
                    size="small"
                    displayEmpty
                  >
                    {assignedToList.map((assign) => (
                      <MenuItem value={assign}>{assign}</MenuItem>
                    ))}
                    <MenuItem value={"Unassigned"}>Unassigned</MenuItem>
                    <MenuItem value={null}>Anyone</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  backgroundColor: "#C9C6C3",
                  color: "primary.main",
                  borderBottom: "none",
                }}
              >
                <FormControl>
                  <TextField
                    value={submittedByValue}
                    onChange={handleSumbittedByChange}
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ backgroundColor: "#C9C6C3", color: "primary.main" }}
              >
                Ticket #
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "#C9C6C3", color: "primary.main" }}
              >
                Issue
              </TableCell>
              <TableCell
                align="left"
                sx={{ backgroundColor: "#C9C6C3", color: "primary.main" }}
              >
                Category
              </TableCell>
              <TableCell
                align="left"
                sx={{ backgroundColor: "#C9C6C3", color: "primary.main" }}
              >
                Status
              </TableCell>
              <TableCell
                align="left"
                sx={{ backgroundColor: "#C9C6C3", color: "primary.main" }}
              >
                Assigned To
              </TableCell>
              <TableCell
                align="left"
                sx={{ backgroundColor: "#C9C6C3", color: "primary.main" }}
              >
                Submitted By
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Must refactor this so it only iterates through the array once */}
            {rows
             .filter((ticket) => {
              if (ticketNumValue.toString() === "") return true;
              return ticket.ticketNum
                .toString()
                .toLowerCase()
                .includes(ticketNumValue.toLowerCase());
            })
              .filter((ticket) => {
                if (!filterCategory) return true;
                return ticket.category === filterCategory;
              })
              .filter((ticket) => {
                if (issueFilter === "") return true;
                return ticket.issue
                  .toLowerCase()
                  .includes(issueFilter.toLowerCase());
              })
              .filter((ticket) => {
                if (!statusFilter) return true;
                return (
                  ticket.status.toLowerCase() === statusFilter.toLowerCase()
                );
              })
              .filter((ticket) => {
                if (!userTicketsOnly) return true;
                return ticket.submittedBy === currentUser.email;
              })
              .filter((ticket) => {
                if (!assignedToValue) return true;
                if (assignedToValue === "Unassigned" && !ticket.assignedTo)
                  return true;
                return ticket.assignedTo === assignedToValue;
              })
              .filter((ticket) => {
                if (submittedByValue === "") return true;
                return ticket.submittedBy
                  .toLowerCase()
                  .includes(submittedByValue.toLowerCase());
              })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.ticketNum}</TableCell>
                  <TableCell align="left">{row.issue}</TableCell>
                  <TableCell align="left">{row.category}</TableCell>
                  <TableCell align="left">{row.status}</TableCell>
                  <TableCell align="left">
                    {row.assignedTo ? row.assignedTo : "Unassigned"}{" "}
                  </TableCell>
                  <TableCell align="left">{row.submittedBy}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleOnPageChange}
          onRowsPerPageChange={handleOnRowsPerPageChange}
        />
      </TableContainer>
    </>
  );
};

export default AllTickets;
