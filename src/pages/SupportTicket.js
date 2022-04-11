import React from "react";
import { NavBar } from "../components/NavBar/NavBar";
import NewTicket from "../components/NewTicket";

const SupportTicket = () => {
  const pageTitle = "New Ticket";
    
  return (
    <>
      <NavBar pageTitle={pageTitle}/>
      <NewTicket />
    </>
  );
};

export default SupportTicket;
