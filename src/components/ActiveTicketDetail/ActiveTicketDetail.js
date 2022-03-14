import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

export function ActiveTicketDetail(props) {
  //get ticket data from API
  const { ticketNum } = useParams();
  const { isLoading, error, data } = useQuery("ticket", () =>
    fetch(`http://localhost:3001/api/tickets/${ticketNum}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  //I'm not sure why this returns as an array. Find out how this is working more specifically
  const currentTicket = data[0];


  return (
    <>
      <div id="formHeader">
        <p>Ticket #{currentTicket.ticketNum}</p>
        <p>Date Submited:{currentTicket.dateSubmitted}</p>
        <p>Status:{currentTicket.status}</p>
        <p>Category:{currentTicket.category}</p>
      </div>
      <div id="formBody">
        <label for="issue">Issue</label>
        <p id="issue">{currentTicket.issue}</p>
        <label for="issueDetails">Detailed Desciption</label>
        <p id="issueDetails">{currentTicket.issueDetails}</p>
      </div>
    </>
  );
}
