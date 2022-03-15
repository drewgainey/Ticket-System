import React, { useState } from "react";
import { CommentDetail } from "../CommentDetail/CommentDetail";
import { useParams } from "react-router-dom";
import { addComment } from "../../api/commentsAPI";
import { dateFormat } from "../../util/dateFormat";
import { useQuery } from "react-query";

export function CommentList(props) {
  const [comment, setComment] = useState("");
  const { ticketNum } = useParams();
  const { isLoading, error, data } = useQuery("commentList", () =>
  fetch(`http://localhost:3001/api/tickets/${ticketNum}/getComments`).then(
    (res) => res.json()
  ));

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const ticketComments = data[0].comments;
  const formattedDate = dateFormat();
  console.log(ticketComments);
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (comment === "") {
      return;
    }
    async function submitComment() {
      await addComment(ticketNum, comment);
      setComment("");
    }
    submitComment();
  };

  return (
    <table className="commentList">
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Comments</th>
        <th scope="col">User</th>
      </tr>
      {ticketComments.map((comment, i) => (
        <CommentDetail {...comment} />
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
