import React from "react";
import { useParams } from "react-router-dom";
import { ActiveTicketDetail } from "../../components/ActiveTicketDetail/ActiveTicketDetail";
import { NewTicketDetail } from "../../components/NewTicketDetail/NewTicketDetail";
import "./TicketDetail.css";

export function TicketDetail(props) {
  const { ticketNum } = useParams();

  let header = <NewTicketDetail />;

  if(ticketNum) {
    header = <ActiveTicketDetail />
  }

  return (
    <>
      {header}
      <p>Place Holder for comments</p>
    </>
  );
}
