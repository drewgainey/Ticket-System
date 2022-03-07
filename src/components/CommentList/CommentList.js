import React from "react";
import { CommentDetail } from "../CommentDetail/CommentDetail";
import { useParams } from "react-router-dom";
import { exampleTickets } from "../../util/exampleTickets";

export function CommentList(props) {
  const { ticketNum } = useParams();
  const ticketIndex = ticketNum - 1;
  const ticketComments = exampleTickets[ticketIndex].comments;

  return (
    <table className="commentList">
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Comments</th>
        <th scope="col">User</th>
      </tr>
      {ticketComments.map((comment, i) => (
        <CommentDetail ticketNum={ticketNum} commentNum={i} />
      ))}
    </table>
  );
}
