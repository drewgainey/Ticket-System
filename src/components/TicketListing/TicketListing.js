import React from "react";
import { TicketHeader } from "../TicketHeader/TicketHeader";
import "./TicketListing.css";
import { exampleTickets } from "../../util/exampleTickets";

export function TicketListing(props) {
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
      {tickets.map(ticket => <TicketHeader {...ticket}/>)}
    </table>
  );
}
