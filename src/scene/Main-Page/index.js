// Dependencies
import React, { useContext } from 'react';
import { DataContext } from 'context'
// Internals
import 'scene/Main-Page/index.css'
import Report from 'component/Report'

export default function App() {
  const context = useContext(DataContext);

  // Get trigger value
  let components;
  if ( context.trigger === 1 ) {
    components = (
      <>
        <button onClick={ () => context.save() } >Download Result</button>
        <button onClick={ () => context.display() } >Report</button>
      </>
    );
  }else if ( context.trigger === 2 ) {
    components = (
      <>
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

  return (
    <div className="home">
      <h2>Programming Challenge</h2>
      <button onClick={ () => context.generate() }>Generate</button>
      <span>{ context.result }</span>
      { components }
    </div>
  )
}