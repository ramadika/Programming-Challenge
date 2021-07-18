// Dependencies
import React, { useEffect, useContext } from 'react';
import { DataContext } from 'context'
import { NavLink } from 'react-router-dom'
// Internals
import 'scenes/Main-Page/index.css'

export default function Index() {
  const context = useContext(DataContext);
  
  // Call restore function
  useEffect(() => {
    if ( context.trigger === 1 || context.trigger === 2 ) {
      context.restore();
    }
  })

  return (
    <div className="home">
      <h2>Programming Challenge</h2>
      <hr />
      <NavLink to="/generate">Generate</NavLink>
    </div>
  )
}