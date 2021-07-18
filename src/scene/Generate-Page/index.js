// Dependencies
import React, { useEffect, useContext } from 'react';
import { DataContext } from 'context'
import { NavLink } from 'react-router-dom'
// Internals
import 'scene/Generate-Page/index.css'
import Report from 'component/Report'

export default function Index() {
    const context = useContext(DataContext);
    
    useEffect(() => {
      if ( context.trigger === 0 ) {
        context.generate();
      }
    })
  
    // Get trigger value
    let components;
    if ( context.trigger === 1 ) {
      components = (
        <>
          <NavLink to="/">Home</NavLink>
          <button onClick={ () => context.save() } >Download Result</button>
          <button onClick={ () => context.display() } >Report</button>
        </>
      );
    }else if ( context.trigger === 2 ) {
      components = (
        <>
          <NavLink to="/">Home</NavLink>
          <button onClick={ () => context.save() } >Download Result</button>
          <button>Report</button>
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
