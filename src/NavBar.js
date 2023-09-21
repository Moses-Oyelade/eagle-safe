import React from 'react'
import { NavLink } from "react-router-dom";
import "./Nav.css"



function NavBar() {




  return (
    <div id="navbar">
      <nav className="nav">
        <ul className="navlink">
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/details">Details</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/save">Save</NavLink>
          </li>
          <li>
            <NavLink to="/Loan">Loan</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;