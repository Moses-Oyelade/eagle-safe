import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
// import "./Nav.css"




function NavBar() {
const [isToggle, setIsToggle] = useState(false);

function handleClick(){
    setIsToggle((isToggle) => !isToggle);

}

const nav = isToggle ? "nav-show":  "nav";
const hamburger = isToggle ? "hamburger-active" :'hamburger'; 

// const lines = <div class= {hamburger}
//                   onClick={handleClick}
//                   >
//                   <span class="bar"></span>
//                   <span class="bar"></span>
//                   <span class="bar"></span>
//               </div>;




  return (
    <div id="navbar">
      <div class= {hamburger}
                  onClick={handleClick}
                  >
                  <span class="bar"></span>
                  <span class="bar"></span>
                  <span class="bar"></span>
              </div>
      <nav className={nav}
        onClick={handleClick}
      >
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