
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Route, Link } from 'react-router-dom';

import Map from "./Assets/images/mapgif.gif"

import footprints from "./Assets/images/footprints.gif"
import Characters from "./Components/characters.js";
import Spells from "./Components/spells.js"
import Houses from "./Components/houses.js"
import SortingHat from "./Components/sortingHat"
import "./App.css"




const useStyles = makeStyles(() => ({
    container: {
      minHeight: "900px",
      height: "100%",
      background: "black",
      display: "flex",
      flexDirection: "column"
      
    },
    imageMap: {
      position: "relative",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, 20%)",
      maxWidth: "720px",
      width: "100%",
      height: "576px",
      marginTop: "-80px"
      
    },
    button: {
        width: "200px",
        margin: " 50px auto 0 auto",
        fontFamily: "harry potter",
        fontSize: "1.2rem",
        backgroundImage: `url(${footprints})`,
        backgroundPosition: "bottom",
        padding: "5px 10px",
        border: "none",
        borderRadius: "10px"
    }
}));

function App(props) {
  const classes = useStyles();

  return (
    <div className={classes.container} >
    <div >
      <Route exact path ="/sorting" component = {SortingHat} />
      <Route exact path="/characters" component = {Characters} />
      <Route exact path="/spells" component = {Spells} />
      <Route exact path="/houses" component = {Houses} />
      
    </div>
     <button className = {classes.button}><Link style = {{textDecoration: "none", color: "black"}} to ="/sorting">I solemnly swear that I am up to no good{" "}(ENTER)</Link></button>
    <div className={classes.container}>
      <img className={classes.imageMap} src = {Map} alt ="Welcome site" />
    </div>

    </div>
 
  );
}



export default App;

