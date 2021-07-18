// Dependencies
import React, { useContext } from 'react';
import { DataContext } from 'context'
// Internals
import 'components/Triggers/index.css'

export default function Index(props) {
    const context = useContext(DataContext);

    // Get prop trigger value
    if (props.trigger === 1){
        return (
            <div className="triggers">
                <button onClick={ () => context.save() } >Download Result</button>
                <button onClick={ () => context.display() } >Report</button>
            </div>
        )
    } else if (props.trigger === 2){
        return (
            <div className="triggers">
                <button onClick={ () => context.save() } >Download Result</button>
                <button>Report</button>
            </div>
        )
    }
}
