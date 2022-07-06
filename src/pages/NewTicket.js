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
import Alert from '@mui/material/Alert';
import { addNewTicket } from "../api/ticketsAPI";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function NewTicket(props) {
  const history = useHistory();
  const [categoriesList, setCategoriesList] = useState([]);
  const [nextTicketNumber, setNextTicketNumber] = useState();
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [issue, setIssue] = useState("");
  const [issueDetails, setIssueDetails] = useState("");
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    fetch("https://ticketing-system-backend.herokuapp.com/api/categories")
      .then((res) => res.json())
      .then((data) => setCategoriesList(data));
  }, []);

  useEffect(() => {
    fetch("https://ticketing-system-backend.herokuapp.com/api/tickets")
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
  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };
  const handleIssueChange = (event) => {
    setIssue(event.target.value);
  };
  const handleIssueDetailsChange = (event) => {
    setIssueDetails(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(category === '') {
      return setError('Please Enter a Category');
    }
    if(priority === '') {
      return setError('Please Select a Priority');
    }
    if(issue === '') {
      return setError('Please Enter a Brief Description of The Issue');
    }
    if(issueDetails === '') {
      return setError('Please Enter the Details of The Issue');
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
    try {
      setError('');
      setLoading(true);
      await addNewTicket(
        nextTicketNumber,
        formattedDate,
        issue,
        issueDetails,
        priority,
        category,
        currentUser.email
      );
      setLoading(false);
    }
    catch {
      setLoading(false);
      return setError('Ticket Failed to Submit');
    }
    history.push(`/home`);
  };

  const paperStyle = {
    padding: 20,
    height: "90vh",
    width: "66%",
    margin: "20px auto",
  };

  const priorities = ["Critical", "High", "Medium", "Low"];

  return (
    <Grid container align="center">
      <Paper style={paperStyle} elevation={10}>
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          New Ticket
        </Typography>
        <Grid item style={{ margin: "20px auto"}}>
          <Typography variant="p">
            Please fill out the below form and include all relvant information to the issue you are having {" "}
          </Typography>
        </Grid>
        <Grid container spacing={2} align="left">
          <Grid xs={6} item>
            <FormControl fullWidth>
              <InputLabel id="priority-select-label">Priority</InputLabel>
              <Select
                labelId="priority-select-label"
                id="priority-select"
                value={priority}
                label="Priority"
                onChange={handlePriorityChange}
              >
                {priorities.map((priority) => (
                  <MenuItem value={priority}>{priority}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={6} item>
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
        </Grid>
        <Grid item style={{ margin: "20px auto" }}>
          <TextField
            variant="standard"
            label="Issue"
            placeholder="Brief Descrption of Issue"
            value={issue}
            onChange={handleIssueChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item style={{ margin: "20px auto" }}>
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
        </Grid>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
          fullWidth
        >
          Submit Ticket
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push('/home')}
          fullWidth
          style={{marginTop: '10px'}}
        >
          Close
        </Button>
        {error && <Alert severity="error" onClose={() => setError('')} sx={{marginTop: '10px'}}>{error}</Alert>}
      </Paper>
    </Grid>
  );
}
