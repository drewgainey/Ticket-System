import React from "react";
import { TicketHeader } from "../TicketHeader/TicketHeader";
import "./TicketListing.css";
import { exampleTickets } from "../../util/exampleTickets";
import { getAllTickets } from "../../api/ticketsAPI"

export function TicketListing(props) {
  const tickets = exampleTickets;
  const asyncTickets = getAllTickets();
  
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
      {tickets.map(ticket => <TicketHeader {...ticket} />)}
    </table>
  );
}
