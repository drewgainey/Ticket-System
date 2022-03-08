import React from "react";
import { useParams } from "react-router-dom";
import { ActiveTicketDetail } from "../../components/ActiveTicketDetail/ActiveTicketDetail";
import { CommentList } from "../../components/CommentList/CommentList";
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
      {ticketNum ? <CommentList /> : <></>}
    </>
  );
}
