// Dependencies
import React from 'react'; 
import { NavLink } from 'react-router-dom'
// Internals
import 'scene/Main-Page/index.css'

export default function Index() {

  return (
    <div className="home">
      <h2>Programming Challenge</h2>
      <hr />
      <NavLink to="/generate">Generate</NavLink>
    </div>
  )
}