const rootURL = "http://localhost:3001/api";

export const addNewTicket = async (
  ticketNum,
  dateSubmitted,
  issue,
  issueDetails,
  priority,
  category,
  submittedBy
) => {
  const response = await fetch(`${rootURL}/tickets`, {
    method: "POST",
    body: JSON.stringify({
      ticketNum: ticketNum,
      dateSubmitted: dateSubmitted,
      issue: issue,
      issueDetails: issueDetails,
      priority: priority,
      category: category,
      submittedBy: submittedBy,
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