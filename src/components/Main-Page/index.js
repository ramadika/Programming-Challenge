// Dependencies
import React, { useContext } from 'react';
import { DataContext } from 'components/Context'
// Internals
import 'components/Main-Page/index.css'
import Report from 'components/Report'

export default function App() {
  const context = useContext(DataContext);
  let button;

  console.log(context.trigger);

  if (context.trigger === 1) {
    button = (
      <>
        <button onClick={() => context.save()} >Download Result</button>
        <button  onClick={() => context.display()} >Report</button>
      </>
    );
  }else if (context.trigger === 2) {
    button = (
      <>
        <button onClick={() => context.save()} >Download Result</button>
        <button  onClick={() => context.display()} >Report</button>
        <Report 
          alphanumerics={context.alphanumericsReport}
          string={context.stringReport}
          real={context.realReport}
          integers={context.integerReport} />
      </>
    )
  }

  return (
    <div className="home">
      <h2>Programming Challenge</h2>
      <button onClick={() => context.generate()}>Generate</button>
      <span>{context.result}</span>
      {button}
    </div>
  )
}