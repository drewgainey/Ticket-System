import React from "react";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from "@mui/material/Grid";
import Switch from '@mui/material/Switch';
import { Paper } from "@mui/material";

const TicketSearchBar = ({
  categories,
  categoriesValue,
  setCategoriesValue,
  statusValue,
  setStatusValue,
  setUserTicketsOnly
}) => {


  return (
    <Paper sx={{ backgroundColor: 'white', color: 'primary.main'}}>
    <Toolbar >
      <Grid container>
        <Grid item xs={2}>
          <Typography variant="h6">Support Ticket Listing</Typography>
        </Grid>
        <Grid item xs={8}>
        </Grid>
        <FormControlLabel control={<Switch onChange={() => setUserTicketsOnly((prev) => !prev)} />} label="Show My Tickets Only" />
      </Grid>
    </Toolbar>
    </Paper>
  );
};

export default TicketSearchBar;
