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
      <Route path="/characters" component = {Characters} />
      {/* <SortingHat sortingHat = {props.sortingHat} getSortingHat = {props.getSortingHat} /> */}
   
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
