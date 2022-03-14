const rootURL = "http://localhost:3001/api";

export const addNewTicket = async (
  ticketNum,
  dateSubmitted,
  issue,
  issueDetails,
  category
) => {
  const response = await fetch(`${rootURL}/tickets`, {
    method: "POST",
    body: JSON.stringify({
      ticketNum: ticketNum,
      issue: issue,
      issueDetails: issueDetails,
      category: category,
      submittedBy: "drewgainey@gmail.com",
      comments: [],
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const newTicket = await response.json();
  return newTicket;
};

export const getAllTickets = async () => {
  const response = await fetch(`${rootURL}/tickets`, {
    method: "GET"
  })
  const ticket = await response.json();
  return ticket;
}