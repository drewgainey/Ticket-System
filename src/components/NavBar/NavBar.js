import React from "react";
import './NavBar.css'
import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <nav>
       <Link to="/dashboard"><p>Home</p></Link> 
       <Link to="/detail"><p>New Ticket</p></Link>
       <Link to="/"><p>Log Out</p></Link>
    </nav>
  );
}
