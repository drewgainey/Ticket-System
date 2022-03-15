import React from "react";

export function CommentDetail(props) {
  return (
    <>
    <tr className="commentDetail">
      <th scope="row">
        {props.date}
      </th>
      <td>
        {props.notes}
      </td>
      <td>
        {props.user}
      </td>
      </tr>
    </>
  );
}
