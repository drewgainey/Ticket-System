import React, { useState } from "react";
import { CommentDetail } from "../CommentDetail/CommentDetail";
import { useParams } from "react-router-dom";
import { addComment, getComments } from "../../api/commentsAPI";
import { dateFormat } from "../../util/dateFormat";
import { useQuery } from "react-query";

export function CommentList(props) {
  const [comment, setComment] = useState("");
  const { ticketNum } = useParams();
  const { isLoading, error, data } = useQuery("comments", () => {
    fetch(`http://localhost:3001/api/tickets/59/getComments`).then(
      (res) => res.json()
    );
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  //let ticketComments = exampleTickets[ticketIndex].comments;
  console.log(isLoading);
  console.log(error);
  console.log(data);
  const ticketComments = data[0];
  const formattedDate = dateFormat();

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    async function submitComment() {
      await addComment(ticketNum, formattedDate, comment);
    }
    submitComment();
    setComment("");
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
