import React from "react";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';

const TicketSearchBar = ({
  categories,
  categoriesValue,
  setCategoriesValue,
  issueValue,
  setIssueValue,
  statusValue,
  setStatusValue,
  setUserTicketsOnly
}) => {
  const handleCategoryChange = (event) => {
    setCategoriesValue(event.target.value);
  };
  const handleIssueChange = (event) => {
    setIssueValue(event.target.value);
  };
  const handleStatusChange = (event) => {
      setStatusValue(event.target.value);
  }
  const statuses = ["Unreviewed", "Escalated", "In Progress"]

  return (
    <Toolbar>
      <Grid container>
        <Grid item xs={2}>
          <Typography variant="h6">Ticket Search</Typography>
        </Grid>
        <Grid item xs={2}>
          <FormControl>
            <TextField
              value={issueValue}
              onChange={handleIssueChange}
              placeHolder="Issue Search"
              label="Search By Issue"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start"><SearchIcon/></InputAdornment>
                ),
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl fullwidth>
            <InputLabel id="category-select-label">Category</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={categoriesValue}
              label="Category"
              onChange={handleCategoryChange}
            >
              {categories.map((cat) => (
                <MenuItem value={cat}>{cat}</MenuItem>
              ))}
              <MenuItem value={null}>All Categories</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl size="small">
            <InputLabel id="status-select-label">Category</InputLabel>
            <Select
              labelId="status-select-label"
              id="status-select"
              value={statusValue}
              label="Status"
              onChange={handleStatusChange}
            >
              {statuses.map((status) => (
                <MenuItem value={status}>{status}</MenuItem>
              ))}
              <MenuItem value={null}>All</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <FormControlLabel control={<Switch onChange={() => setUserTicketsOnly((prev) => !prev)} />} label="Show My Tickets Only" />
      </Grid>
    </Toolbar>
  );
};

export default TicketSearchBar;
