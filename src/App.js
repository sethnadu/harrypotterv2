import React from 'react';
import {connect} from "react-redux";

import { Route } from 'react-router-dom';

import Characters from "./Components/characters.js";
import Spells from "./Components/spells.js"
import Houses from "./Components/houses.js"
import SortingHat from "./Components/sortingHat"
import Nav from "./Components/nav"
import './App.css';

function App(props) {


  return (

    <div className="App">
      <Nav />
      <Route exact path = "/" component = {SortingHat} />
      <Route path="/characters" component = {Characters} />
      <Route path="/spells" component = {Spells} />
      <Route path="/houses" component = {Houses} />
      
    </div>
 
  );
}


const mapStateToProps = state => {
  return {
    characters: state.characters,
    spells: state.spells,
    houses: state.houses,
    sortingHat: state.sortingHat,
    isLoading: state.isLoading
  }
}
export default connect(mapStateToProps, {})(App);
