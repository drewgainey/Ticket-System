import React from "react";
import { exampleTickets } from "../../util/exampleTickets";

export function CommentDetail(props) {
  const ticketIndex = props.ticketNum - 1;
  const commentIndex = props.commentNum;

  return (
    // <tr className="commentDetail">
    <>
    <tr className="commentDetail">
      <th scope="row">
        {exampleTickets[ticketIndex].comments[commentIndex].date.toString()}
      </th>
      <td>
        {exampleTickets[ticketIndex].comments[commentIndex].notes.toString()}
      </td>
      <td>
        {exampleTickets[ticketIndex].comments[commentIndex].user.toString()}
      </td>
      </tr>
    </>
  );
}
