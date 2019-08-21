import React from 'react';
import {connect} from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Route } from 'react-router-dom';

import Characters from "./Components/characters.js";
import Spells from "./Components/spells.js"
import Houses from "./Components/houses.js"
import SortingHat from "./Components/sortingHat"
import Nav from "./Components/nav"
import './App.css';



const useStyles = makeStyles(() => ({
  copyrightDiv: {
    bottom: "0",
    position: "fixed",
    display: 'flex',
    flexDirection: 'row wrap',
    margin: "40px auto 10px auto",
    justifyContent: "center",
    width: "100%",
    opacity: ".6",
    "&:hover": {
      opacity: "1",
    },
    
    
  },
  linkColor: {
      color: "white",
      textDecoration: "none",
    }
}));

function App(props) {
  const classes = useStyles();

  return (

    <div className="App">
      <Nav />
      <Route exact path = "/" component = {SortingHat} />
      <Route path="/characters" component = {Characters} />
      <Route path="/spells" component = {Spells} />
      <Route path="/houses" component = {Houses} />
      <footer className = {classes.copyrightDiv}>
        <p >Api: <a className = {classes.linkColor} href="https://www.potterapi.com/">https://www.potterapi.com/</a></p>{" "}
        <p>Created by: <a className = {classes.linkColor}  href="https://github.com/sethnadu">Seth Nadu</a></p>
      </footer>
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
