import React from "react";
import { categories } from "../../util/categories";
import "./TicketDetail.css";

export function TicketDetail() {
  const ticketCategories = categories;

  return (
    <>
      <form>
        <div id="formHeader">
          <p>Ticket #</p>
          <p>Date Submited</p>
          <p>Status</p>
          <label for="category">Category</label>
          <select name="category" id="category">
            {ticketCategories.map((cat) => (
              <option value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div id="formBody">
          <label for="issue">Issue</label>
          <input type="text" id="issue"></input>
          <input type="submit"></input>
        </div>
      </form>
      <p>Place Holder for comments</p>
    </>
  );
}
