import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import thunk from "redux-thunk";

import App from './App';
import Characters from "./Components/characters.js";
import Spells from "./Components/spells.js"
import Houses from "./Components/houses.js"
import SortingHat from "./Components/sortingHat"


import {reducer} from "./Reducers"

const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store = {store}>
        <Router>
        <Switch> 
            <Route exact path="/" component = {App} />      
            <Route path ="/sorting" component = {SortingHat} />
            <Route path="/characters" component = {Characters} />
            <Route path="/spells" component = {Spells} />
            <Route path="/houses" component = {Houses} />
        </Switch>
         
        </Router>
    </Provider>, document.getElementById('root'));


