import React from "react";
import { useParams } from 'react-router-dom';
import { exampleTickets } from "../../util/exampleTickets";

export function ActiveTicketDetail(props) {
  const { ticketNum } = useParams();
  const currentTicket = exampleTickets[ticketNum - 1];

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
