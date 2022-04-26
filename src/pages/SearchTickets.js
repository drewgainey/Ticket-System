import React from 'react';
import { useState, useEffect} from 'react';
import { NavBar } from "../components/NavBarMenuDrawer";
import AllTickets from '../components/AllTickets';

const SearchTicket = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/tickets")
          .then((res) => res.json())
          .then((data) => setTickets(data));
      }, []);

    return (
        <>
            <NavBar />
            <AllTickets tickets={tickets}/>
        </>
    )
}

export default SearchTicket; 