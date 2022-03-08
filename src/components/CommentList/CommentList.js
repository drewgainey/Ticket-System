import React, { useEffect, useState } from "react";
import { CommentDetail } from "../CommentDetail/CommentDetail";
import { useParams } from "react-router-dom";
import { exampleTickets } from "../../util/exampleTickets";
import { addComment, getComments } from "../../api/commentsAPI";

export function CommentList(props) {
  const { ticketNum } = useParams();
  const ticketIndex = ticketNum - 1;
  const [comment, setComment] = useState("");
  // const [ticketComments, setTicketComments] = useState([]);
  //fetch ticket comments from API
  let ticketComments = exampleTickets[ticketIndex].comments;
  // useEffect(() => {
  //   async function fetchComments() {
  //     const comments = await getComments(ticketNum);
  //     setTicketComments(comments);
  //   }
  //   fetchComments()
  // }, [ticketNum]);


  const date = new Date();
  const [month, day, year] = [
    date.getMonth() + 1,
    date.getDate(),
    date.getFullYear(),
  ];
  const formattedDate = `${month}/${day}/${year}`;

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    // keeping for now just for front end testing right now
    exampleTickets[ticketIndex].comments.push({
      date: formattedDate,
      user: "drewgainey@gmail.com",
      notes: comment,
    });
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
