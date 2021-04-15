import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ToDos from './ToDos';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
    <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/tareas" component={ToDos} />
    </Router>,
    document.getElementById('root')
);
