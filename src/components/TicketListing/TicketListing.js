import React from "react";
import { TicketHeader } from "../TicketHeader/TicketHeader";
import "./TicketListing.css";
import { getAllTickets } from "../../api/ticketsAPI";
import { useQuery } from "react-query";

export function TicketListing(props) {
  const { isLoading, error, data } = useQuery("tickets", () =>
    fetch("http://localhost:3001/api/tickets").then(
      (res) => res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const tickets = data;

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
