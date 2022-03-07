import React, { useState } from "react";
import { CommentDetail } from "../CommentDetail/CommentDetail";
import { useParams } from "react-router-dom";
import { exampleTickets } from "../../util/exampleTickets";

export function CommentList(props) {
  const { ticketNum } = useParams();
  const ticketIndex = ticketNum - 1;
  const ticketComments = exampleTickets[ticketIndex].comments;

  const date = new Date();
  const [month, day, year] = [
    date.getMonth() + 1,
    date.getDate(),
    date.getFullYear(),
  ];
  const formattedDate = `${month}/${day}/${year}`;

  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    exampleTickets[ticketIndex].comments.push({
      date: formattedDate,
      user: "drewgainey@gmail.com",
      notes: comment,
    });
    setComment('');
  };

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
      <tr>
        <th scope="row">{formattedDate}</th>
        <td>
          <input
            type="text"
            value={comment}
            onChange={handleCommentChange}
          ></input>
        </td>
        <td>
          <button onClick={handleClick}>Submit Comment</button>
        </td>
      </tr>
    </table>
  );
}
