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
import { useAuth } from "../contexts/AuthContext";

export function NewTicket(props) {
  const history = useHistory();
  const [categoriesList, setCategoriesList] = useState([]);
  const [nextTicketNumber, setNextTicketNumber] = useState();
  const [category, setCategory] = useState("");
  const [issue, setIssue] = useState("");
  const [issueDetails, setIssueDetails] = useState("");
  const { currentUser } = useAuth();

  useEffect(() => {
    fetch("http://localhost:3001/api/categories")
      .then((res) => res.json())
      .then((data) => setCategoriesList(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/tickets")
      .then((res) => res.json())
      .then((data) => {
        setNextTicketNumber(
          data.reduce((prev, current) =>
            prev.ticketNum > current.ticketNum
              ? prev.ticketNum
              : current.ticketNum
          ) + 1
        );
      });
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (issue === "" || category === "" || issueDetails === "") {
      alert("Please enter the required fields");
      return;
    }
    const dateFormat = () => {
      const date = new Date();
      const [month, day, year] = [
        date.getMonth() + 1,
        date.getDate(),
        date.getFullYear(),
      ];
      return `${month}/${day}/${year}`;
    };
    const formattedDate = dateFormat();
    //when there is a duplicate ticketnumber an error is thrown in the backen however this isn't evident to the user
    async function submitTicket() {
      await addNewTicket(
        nextTicketNumber,
        formattedDate,
        issue,
        issueDetails,
        category,
        currentUser.email
      );
    }
    submitTicket();
    history.push(`/home`);
  };

  const paperStyle = {
    padding: 20,
    height: "90vh",
    width: "66%",
    margin: "20px auto",
  };

  return (
    <Grid container align="center">
      <Paper style={paperStyle} elevation={10}>
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          New Ticket
        </Typography>
        <Grid item align="left">
          <Typography>
            Contact Email:{" "}
            <TextField placeholder={currentUser.email} disabled />
          </Typography>
        </Grid>
        <Grid item align="left">
          <Typography>Priority</Typography>
        </Grid>
        <Grid item align="left">
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
        </Grid>
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
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
          fullWidth
        >
          Submit Ticket
        </Button>
      </Paper>
    </Grid>
  );
}
