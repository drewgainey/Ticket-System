import React, { useState } from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { addNewTicket } from "../../api/ticketsAPI";
import { exampleTickets } from "../../util/exampleTickets";
import { getCategories } from "../../api/categoriesAPI";
import { dateFormat } from "../../util/dateFormat";
import { nextTicketNumber } from "../../util/ticketHelperFunctions";

export function NewTicketDetail(props) {
  const history = useHistory();
  const [category, setCategory] = useState("");
  const [issue, setIssue] = useState("");
  const [issueDetails, setIssueDetails] = useState("");

  const formattedDate = dateFormat();
  //need to finish implementing this
  const newTicketNum = nextTicketNumber();
  const status = "Pending";

  //React Query to get categories for tickets
  const { isLoading, error, data } = useQuery("categories", getCategories);

  if (isLoading) return 'Loading...'
 
  if (error) return 'An error has occurred: ' + error.message

  const ticketCategories = data;

  //update state on changes to the form
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
    if (issue === "" || category === "" || issueDetails === "") {
      alert("Please enter the required fields");
      return;
    }
    // keep the push to example tickets for now just for testing front end
    exampleTickets.push({
      ticketNum: newTicketNum,
      dateSubmitted: formattedDate,
      issue: issue,
      issueDetails: issueDetails,
      status: status,
      category: category,
      submittedBy: "drewgainey@gmail.com",
      comments: [],
    });
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
    history.push(`/detail/${newTicketNum}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="formHeader">
        <p>Ticket #{newTicketNum}</p>
        <p>Date Submited:{formattedDate}</p>
        <p>Status:{status}</p>
        <label for="category">Category</label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={handleCategoryChange}
        >
          <option>Please Select a Category</option>
          {ticketCategories.map((cat) => (
            <option value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div id="formBody">
        <label for="issue">Issue</label>
        <input
          type="text"
          id="issue"
          value={issue}
          onChange={handleIssueChange}
        ></input>
        <label for="issueDetails">Detailed Desciption</label>
        <input
          type="text"
          id="issueDetails"
          value={issueDetails}
          onChange={handleIssueDetailsChange}
        ></input>
        <input type="submit"></input>
      </div>
    </form>
  );
}
