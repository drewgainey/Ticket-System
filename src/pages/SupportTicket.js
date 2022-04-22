import React from "react";
import { NavBar } from "../components/NavBarMenuDrawer";
import { NewTicket } from "./NewTicket";

const SupportTicket = () => {
  const pageTitle = "New Ticket";
    
  return (
    <>
      {false && <NavBar pageTitle={pageTitle}/>}
      <NewTicket />
    </>
  );
};

export default SupportTicket;
