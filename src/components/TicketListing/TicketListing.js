import React, { useState, useEffect } from "react";
import { TicketHeader } from "../TicketHeader/TicketHeader";

export function TicketListing(props) {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/tickets")
      .then((res) => res.json())
      .then((data) => setTickets(data))
  },[]);

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
      {tickets.map((ticket) => (
        <TicketHeader {...ticket} />
      ))}
    </table>
  );
}
