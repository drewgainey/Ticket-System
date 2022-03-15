const rootURL = "http://localhost:3001/api";

export const addComment = async (ticketNum, comment ) => {
    const response = await fetch(`${rootURL}/tickets/${ticketNum}/newComment`, {
        method: "PUT",
        body: JSON.stringify({
            user: "drewgainey@gmail.com",
            notes: comment
        }),
        headers: {
            "Content-Type": "application/json",
          },
    });
    const newComment = await response.json;
    return newComment; 
};

export const getComments = async (ticketNum) => {
    const response = await fetch(`${rootURL}/tickets/${ticketNum}/getComments`, {
        method: "GET"
    });
    const comments = await response.json;
    return comments; 
}