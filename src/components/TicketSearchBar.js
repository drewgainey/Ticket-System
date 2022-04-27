import React from "react";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';

const TicketSearchBar = ({
  categories,
  categoriesValue,
  setCategoriesValue,
  issueValue,
  setIssueValue,
}) => {
  const handleCategoryChange = (event) => {
    setCategoriesValue(event.target.value);
  };
  const handleIssueChange = (event) => {
    setIssueValue(event.target.value);
  };

  return (
    <Toolbar>
      <Grid container>
        <Grid item xs={2}>
          <Typography variant="h6">Ticket Search</Typography>
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
      </Grid>
    </Toolbar>
  );
};

export default TicketSearchBar;
