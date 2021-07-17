// Dependencies
import React from 'react'
// Internals
import 'component/Report/index.css'

export default function index(props) {
    
    // Get value from props
    return (
        <div className="report">
            <h4>Alphabetical String: {props.string} </h4>
            <h4>Real Numbers: {props.real} </h4>
            <h4>Integers: {props.integers} </h4>
            <h4>Alphanumerics: {props.alphanumerics} </h4>
        </div>
    )
}
