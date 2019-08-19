import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import thunk from "redux-thunk";

import {reducer} from "./Reducers"

const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store = {store}>
        <Router>
         <Route path="/" component = {App} />   
        </Router>
    </Provider>, document.getElementById('root'));


