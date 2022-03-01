import React from "react";

export function TicketHeader(props) {
    
  return (
    <tr>
      <td>{props.ticketNum}</td>
      <td>{props.dateSubmitted}</td>
      <td>{props.issue}</td>
      <td>{props.status}</td>
      <td>{props.category}</td>
      <td>{props.submittedBy}</td>
    </tr>
  );
}
