import React from "react";
import { Link } from 'react-router-dom';

export function TicketHeader(props) {
    
  return (
    <tr>
      <td><Link to={`/detail/${props.ticketNum}`}>{props.ticketNum}</Link></td>
      <td>{props.dateSubmitted}</td>
      <td>{props.issue}</td>
      <td>{props.status}</td>
      <td>{props.category}</td>
      <td>{props.submittedBy}</td>
    </tr>
  );
}
