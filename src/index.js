// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import { DataProvider } from 'context'

// Internals
import './index.css';

// Apps
import App from 'scene/Main-Page';
import Generate from 'scene/Generate-Page'

ReactDOM.render(
  <Router>
    <DataProvider>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/generate" component={Generate} />
      </Switch>
    </DataProvider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
