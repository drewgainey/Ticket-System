import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getCategories } from "../../api/categoriesAPI";
import { addNewTicket } from "../../api/ticketsAPI";
import { exampleTickets } from "../../util/exampleTickets";

export function NewTicketDetail(props) {
  const history = useHistory();
  const [category, setCategory] = useState("");
  const [issue, setIssue] = useState("");
  const [issueDetails, setIssueDetails] = useState("");
  
  const date = new Date();
  const [month, day, year] = [
    date.getMonth() + 1,
    date.getDate(),
    date.getFullYear(),
  ];
  const formattedDate = `${month}/${day}/${year}`;
  const numOfTickets = exampleTickets.length;
  const newTicketNum = exampleTickets[numOfTickets - 1].ticketNum + 1;
  const status = "Pending";

  //fetch ticket categories from API
  const [ticketCategories, setTicketCategories] = useState(["AP"]); 
 

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
      await addNewTicket(newTicketNum, formattedDate, issue, issueDetails, category);
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
