import React from "react";
import { TicketHeader } from "../TicketHeader";
import "./DashBoard.css";
import { exampleTickets } from "../../util/exampleTickets";

export function DashBoard(props) {
  const tickets = exampleTickets;

  return (
    <table>
      <thead>
        <tr>
          <th>Ticket #</th>
          <th>Date Submited</th>
          <th>Issue</th>
          <th>Status</th>
          <th>Category</th>
          <th>Submitted By</th>
        </tr>
      </thead>
      {tickets.map(ticket => <TicketHeader
      ticketNum={ticket.ticketNum} 
      dateSubmitted={ticket.dateSubmitted}
      issue={ticket.issue}
      status={ticket.status}
      category={ticket.category}
      submittedBy={ticket.submittedBy}
      />)}
    </table>
  );
}
