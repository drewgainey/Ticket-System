import React, { useState } from "react";
import { categories } from "../../util/categories";
import { exampleTickets } from "../../util/exampleTickets";
import "./TicketDetail.css";

export function TicketDetail() {
  const [category, setCategory] = useState('');
  const [issue, setIssue] = useState('');
  const ticketCategories = categories;
  const date = new Date();
  const [month, day, year] = [
    date.getMonth() + 1,
    date.getDate(),
    date.getFullYear(),
  ];
  const formattedDate = `${month}/${day}/${year}`;
  const numOfTickets = exampleTickets.length;
  const newTicketNum = exampleTickets[numOfTickets -1].ticketNum + 1;
  const status = 'Pending';

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleIssueChange = (event) => {
    setIssue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if(issue === '' || category === '') {
      alert('Please enter the required fields');
      return;
    }
    //needs to be updated to add the ticket to the database
    exampleTickets.push({
      ticketNum: newTicketNum,
      dateSubmitted: formattedDate,
      issue: issue,
      status: status,
      category: category,
      submittedBy: "drewgainey@gmail.com",
    });
  };

  return (
    <>
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
          <input type="submit"></input>
        </div>
      </form>
      <p>Place Holder for comments</p>
    </>
  );
}
