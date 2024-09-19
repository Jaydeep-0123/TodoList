import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar1() {
  return (
    <div className='nav fixed-top'>
      <li><nav class="navbar navbar-dark bg-dark ">
     <Link style={{color:'white'}}  className="nav-link "><h3>Navbar</h3></Link>
    </nav>
    </li>
    <nav class="navbar navbar-dark bg-dark ">
    <li>
      <Link style={{color:'white'}}  to="/Signup" className="nav-link ">SignUp</Link>
    </li>
    </nav>
    <nav class="navbar navbar-dark bg-dark ">
    <li>
      <Link style={{color:'white'}}  to="/Login" className="nav-link ">Login</Link>
    </li>
    </nav>
    <nav class="navbar navbar-dark bg-dark ">
    <li>
      <Link style={{color:'white'}}  to="/Home" className="nav-link ">Home</Link>
    </li>
    </nav>
    <nav class="navbar navbar-dark bg-dark ">
    <li>
      <Link style={{color:'white'}}  to="/AddTask" className="nav-link ">Add All Task</Link>
    </li>
    </nav>

  </div>
  )
}

export default Navbar1