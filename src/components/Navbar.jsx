import React from 'react'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <div className="Header">
        <ul class="navList">
          <li><Link to="/">Home</Link></li>

        </ul>
        <h1>Cinedev Studio</h1>
        
        <ul class="navList">
          <li><Link to="/Contact">Contact</Link></li>  
        </ul>
    </div>
  )
}
