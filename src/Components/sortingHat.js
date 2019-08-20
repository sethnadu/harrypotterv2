import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import Sound from 'react-sound';
import Loader from "react-loader-spinner";
import { makeStyles } from "@material-ui/core/styles";
import { getSortingHat } from "../Actions";
import "../App.css"

import GryffindorSound from "../Assets/audioclips/Gryffindor.mp3"

const SortingHat = ({sortingHat, isLoading, getSortingHat}) => {
    const [play, setPlay] = useState(false)

    const gryffindor = new Audio(GryffindorSound)

    console.log(sortingHat)
    console.log(getSortingHat)
    
    // useEffect(() => {
    //     return getSortingHat();
    // }, [getSortingHat])

//    const GryffindorHook =  useEffect(() => { return handleClick(gryffindor)}, [getSortingHat])

    const handleClick = name => {
        setPlay(true)
        name.play()
        setPlay(false)
    }


    return (
        <div>
            <button onClick ={getSortingHat} >What House are you in?</button>
            <h2> {sortingHat}</h2>
            {/* {sortingHat === "Gryffindor" && (GryffindorHook)} */}
            
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