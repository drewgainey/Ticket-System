import { getAllTickets } from "../api/ticketsAPI";

export const nextTicketNumber = () => {
  const tickets = getAllTickets(); 
  console.log(tickets)
  return 69;
};
