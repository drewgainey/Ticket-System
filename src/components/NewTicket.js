import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { addNewTicket } from "../api/ticketsAPI";
import { useHistory } from "react-router-dom";
import { dateFormat } from "../util/dateFormat";

export function NewTicket(props) {
  const history = useHistory();
  const [categoriesList, setCategoriesList] = useState([]);
  const [category, setCategory] = useState("");
  const [issue, setIssue] = useState("");
  const [issueDetails, setIssueDetails] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/categories")
      .then((res) => res.json())
      .then((data) => setCategoriesList(data));
  }, []);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleIssueChange = (event) => {
    setIssue(event.target.value);
  };
  const handleIssueDetailsChange = (event) => {
    setIssueDetails(event.target.value);
  };

  //submit the ticket to the API
  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedDate = dateFormat();
    const newTicketNum = 102;
    if (issue === "" || category === "" || issueDetails === "") {
      alert("Please enter the required fields");
      return;
    }
    //when there is a duplicate ticketnumber an error is thrown in the backend
    //however this isn't evident to the user. Needs to make it so there is a new ticket num that is correct
    async function submitTicket() {
      await addNewTicket(
        newTicketNum,
        formattedDate,
        issue,
        issueDetails,
        category
      );
    }
    submitTicket();
    history.push(`/home`);
  };

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "10 auto",
  };
  return (
    <Grid align="center">
      <Paper style={paperStyle} elevation={10}>
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          New Ticket
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={category}
            label="Category"
            onChange={handleCategoryChange}
          >
            {categoriesList.map((cat) => (
              <MenuItem value={cat}>{cat}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          variant="standard"
          label="Issue"
          placeholder="Brief Descrption of Issue"
          value={issue}
          onChange={handleIssueChange}
          fullWidth
          required
        />
        <TextField
          variant="outlined"
          label="Issue Details"
          placeholder="Please Include All Relevant Details Of The Issue"
          value={issueDetails}
          onChange={handleIssueDetailsChange}
          multiline
          rows={4}
          fullWidth
          required
        />
        <Button variant="contained" color="primary" type="submit" onClick={handleSubmit} fullWidth>
          Submit Ticket
        </Button>
      </Paper>
    </Grid>
  );
}
