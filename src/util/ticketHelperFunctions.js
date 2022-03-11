import { getAllTickets } from "../api/ticketsAPI";

export const nextTicketNumber = () => {
  const allTickets = fetch("http://localhost:3001/api/categories").then(
    (res) => res.json()
  );
  return 69;
};
