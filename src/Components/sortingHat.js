import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { makeStyles } from "@material-ui/core/styles";
import { getSortingHat } from "../Actions";
import "../App.css"

import Gryffindorbanner from "../Assets/images/gryffindorbanner.jpeg"
import GryffindorTop from "../Assets/images/gtop.png"
import Slytherinbanner from "../Assets/images/slytherinbanner.png"
import SlytherinTop from "../Assets/images/stop.png"
import Hufflepuffbanner from "../Assets/images/hufflepuffbanner.jpg"
import HufflepuffTop from "../Assets/images/htop.png"
import Ravenclawbanner from "../Assets/images/ravenclawbanner.jpg"
import RavenclawTop from "../Assets/images/rtop.png"
import GreatHall from "../Assets/images/Greathall.jpg"
import buttonImage from "../Assets/images/buttonImage.jpg"

const useStyles = makeStyles(() => ({
    GreatHallImage: {
        maxWidth: "800px",
        width: "100%",
        borderRadius: "10px"
    },
    title: {
        fontSize: "4rem",
        color: "#f8c20e",
        fontWeight: "bold",
        textShadow: "-3px 0 black, 0 3px black, 3px 0 black, 0 -3px black",
    },
    banner: {
        width: "300px",
        height: "400px",
        display: "flex",
        margin: "20px auto",
        borderRadius: "10px",
        boxShadow: "5px 5px 10px"
    },
    houseTitleG: {
        fontSize: "3rem",
        color: "#a8183a",
        textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
    },
    houseTitleH: {
        fontSize: "3rem",
        color: "#e7992f",
        textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
    },
    houseTitleS: {
        fontSize: "3rem",
        color: '#008e43',
        textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
    },
    houseTitleR: {
        fontSize: "3rem",
        color: '#0a3d62',
        textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
    },
    topImage: {
        marginTop: "0",
        width: "100%",
        maxWidth: "800px"
    },
    button: {
        width: "250px",
        fontSize: "1.4rem",
        color: "white",
        padding: "5px 10px",
        backgroundImage: `url(${buttonImage})`,
        backgroundSize: "cover",
        fontWeight: "bolder",
        fontFamily: "harry potter",
        border: "2px solid #3d221a",
        borderRadius: "10px"
    },
    text: {
        margin: "10px"
    }

}));

const SortingHat = ({sortingHat, isLoading, getSortingHat}) => {
    const classes = useStyles();  
    console.log(sortingHat)
    return (
        <div>
            
            { sortingHat.length < 1  && ( 
                <>
                <h2 className = {classes.title} >Welcome to Hogwarts</h2>
                <img className = {classes.GreatHallImage} src = {GreatHall} alt ="Welcom to Hogwarts" />
                <h2 className = {classes.text}>Click the button below to decide what house to join!</h2>
               
                </>
            )}
           
            { sortingHat === "Gryffindor" && ( 
                <>
                <img className = {classes.topImage} src = {GryffindorTop} alt ="Gryffindor" />
                <h2>Brave at heart</h2>
                <h2> daring</h2> 
                <h2>better be....</h2>
                 <h2 className = {classes.houseTitleG} >{sortingHat}</h2>
                <img className = {classes.banner} src={Gryffindorbanner} alt = "Welcome to Gryffindor!" />
                </>
            )}
             { sortingHat === "Slytherin" && ( 
                <>
                <img className = {classes.topImage} src = {SlytherinTop} alt ="Slytherin" />
                <h2>Hmmm...</h2>
                <h2>let's see....</h2>
                 <h2 className = {classes.houseTitleS}>{sortingHat}</h2>
                <img className = {classes.banner} src={Slytherinbanner} alt = "Welcome to Slytherin!" />
                </>
            )}
            { sortingHat === "Ravenclaw" && ( 
                <>
                <img className = {classes.topImage} src = {RavenclawTop} alt ="Ravenclaw" />
                <h2>Yes! </h2>
                <h2>A ready mind. </h2>
                <h2>You belong in...</h2>
                 <h2 className = {classes.houseTitleR}>{sortingHat}</h2>
                <img className = {classes.banner} src={Ravenclawbanner} alt = "Welcome to Ravenclaw!" />
                </>
            )}
            { sortingHat === "Hufflepuff" && ( 
                <>
                <img className = {classes.topImage}  src = {HufflepuffTop} alt ="Hufflepuff" />
                <h2>Just and Loyal</h2>
                <h2> true. </h2>
                <h2>Yes, clearly...</h2>
                 <h2 className = {classes.houseTitleH}>{sortingHat}</h2>
                <img className = {classes.banner} src={Hufflepuffbanner} alt = "Welcome to Hufflepuff!" />
                </>
            )}
             <button className = {classes.button} onClick ={getSortingHat} >{sortingHat.length < 1 ? "What House are you in?" : "Try Again"}</button>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
      sortingHat: state.sortingHat,
      isLoading: state.isLoading,
    };
  };
export default connect(
    mapStateToProps,
    { getSortingHat }
  )(SortingHat);