// Dependencies
import React, { useEffect, useContext } from 'react';
import { DataContext } from 'context'
import { NavLink } from 'react-router-dom'
// Internals
import 'scenes/Generate-Page/index.css'
import Report from 'components/Report'
import Triggers from 'components/Triggers'

export default function Index() {
    const context = useContext(DataContext);
    
    // Call generate function after 1 seconds
    useEffect(() => {
      if ( context.trigger === 0 ) {
        setTimeout(() => {
          context.generate()
        }, 1000);
      }
    })
  
    // Get trigger value
    let components;
    if ( context.trigger === 1 ) {
      components = (
        <>
          <NavLink to="/">Home</NavLink>
          <Triggers trigger={1} />
        </>
      );
    }else if ( context.trigger === 2 ) {
      components = (
        <>
          <NavLink to="/">Home</NavLink>
          <Triggers trigger={2} />
          <Report 
            string={ context.stringReport }
            real={ context.realReport }
            integers={ context.integersReport }
            alphanumerics={ context.alphanumericsReport } />
        </>
      )
    }
    
    if(context.loading){
        return <div className="generate">
                    <h2>Loading...</h2>
                </div>
    }else {
        return (
            <div className="generate">
                <h2>Programming Challenge</h2>
                <hr />
                { components }
                <span>{ context.result }</span>
            </div>
        )
    }
}
