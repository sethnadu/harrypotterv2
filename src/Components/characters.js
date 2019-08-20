import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css"
import { getCharacters } from "../Actions";
import HarryPotterImage from "../Assets/HarryPotter1.jpg"

import CharacterCard from "./characterCard.js";
import OrganizationDropDown from "./Organizationcomponents/organizationdropdown.js"

/////////// Styling ////////////////////////////////////////
const useStyles = makeStyles(() => ({
  container: {
    margin: "30px",
    fontFamily: "harry potter"
  },
  searchContainer: {
    margin: "120px 20px 0 20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  textInput: {
    width: "200px",
    margin: "auto",
    textAlign: "center",
    padding: "5px",
    borderRadius: "10px",
    border: "2px solid #8d0901",
    backgroundColor: "#f8c20e",
    color: "#8d0901",
    fontWeight: "bold",
    fontSize: "1.2rem",
    fontFamily: "cursive",
  },
  title: {
    fontSize: "2.4rem"
  },
  image: {
    maxWidth: "700px",
    width: "100%",
    borderRadius: "10px",
  }
}));

const Characters = props => {
  /////// Styling && Form State ///////////////////////////////
  const classes = useStyles();
  const [search, setSearch] = useState("");

  /////////// Functions ////////////////////////////////////////
  const handleChange = event => {
    setSearch(event.target.value);
    props.getCharacters();
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.getCharacters();
    console.log(props.characters);
  };

  const handleOrganizaton = name => {
    setSearch(name);
    props.getCharacters();
  };


  const handleHouse = house => {
    setSearch(house);
    props.getCharacters();
  };


  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Harry Potter Characters</h2>
      <img className={classes.image} src ={HarryPotterImage} alt ="Harry Potter Voldemort face off" />
      <form className={classes.form} onSubmit={handleSubmit}>
        <p>Search Character by Name</p>
        <input
          className={classes.textInput}
          type="text"
          onChange={handleChange}
          placeholder="ex. Harry Potter"
        />
      </form>
      <p>(Case Sensitive)</p>
      <OrganizationDropDown handleHouse = {handleHouse} handleOrganizaton = {handleOrganizaton} getCharacters = {props.getCharacters}/>
      {/* <div className = {classes.searchOptions}>
        <div className={classes.organization}>
          <p>Sort by Organization</p>
          <p className={classes.options}  onClick={() => handleOrganizaton("deathEaters")}>Death Eater's</p>{" "}
          <p className={classes.options}  onClick={() => handleOrganizaton("ministryOfMagic")}>Ministry of the Magic</p>
          <p className={classes.options}  onClick={() => handleOrganizaton("dumbledoresArmy")}>Dumbledore's Army</p>{" "}
          <p className={classes.options}  onClick={() => handleOrganizaton("orderOfThePhoenix")}>Order of the Phoenix</p>{" "}
        </div>
        <div className={classes.organization}>
        <p>Sort by House</p>
          <p className={classes.Gryffindor}  onClick={() => handleHouse("Gryffindor")}>Gryffindor</p>{" "}
          <p className={classes.Hufflepuff}  onClick={() => handleHouse("Hufflepuff")}>Hufflepuff</p>{" "}
          <p className={classes.Slytherin}  onClick={() => handleHouse("Slytherin")}>Slytherin</p>{" "}
          <p className={classes.Ravenclaw}  onClick={() => handleHouse("Ravenclaw")}>Ravenclaw</p>
        </div>
      </div> */}
      {/* /////////// API LOADER //////////////////////////////////////// */}
      {props.isLoading ? (
        <Loader type="BallTriangle" color="#e22121" height={100} width={100} />
      ) : (
        ""
      )}

      {/* /////////// API LOADER ENDED //////////////////////////////////////// */}
      <div className={classes.searchContainer}>
        {props.characters.map(character => {
          return (
            character.name.includes(`${search}`) && 
            search !== "" && (
              <CharacterCard key={character._id} character={character} />
            )
          );
        })}
      </div>
      <div className={classes.searchContainer}>
        {props.characters.map(character => {
          return (
            search === "dumbledoresArmy" &&
            character.dumbledoresArmy === true && (
              <CharacterCard key={character._id} character={character} />
            )
          );
        })}
      </div>
      <div className={classes.searchContainer}>
        {props.characters.map(character => {
          return (
            search === "deathEaters" &&
            character.deathEater === true && (
              <CharacterCard key={character._id} character={character} />
            )
          );
        })}
      </div>
      <div className={classes.searchContainer}>
        {props.characters.map(character => {
          return (
            search === "orderOfThePhoenix" &&
            character.orderOfThePhoenix=== true && (
              <CharacterCard key={character._id} character={character} />
            )
          );
        })}
      </div>
      <div className={classes.searchContainer}>
        {props.characters.map(character => {
          return (
            search === "ministryOfMagic" &&
            character.ministryOfMagic === true && (
              <CharacterCard key={character._id} character={character} />
            )
          );
        })}
      </div>


      <div className={classes.searchContainer}>
        {props.characters.map(character => {
          return (
            search === "Gryffindor" &&
            character.house === "Gryffindor" && (
              <CharacterCard key={character._id} character={character} />
            )
          );
        })}
      </div>
      <div className={classes.searchContainer}>
        {props.characters.map(character => {
          return (
            search === "Slytherin" &&
            character.house === "Slytherin" && (
              <CharacterCard key={character._id} character={character} />
            )
          );
        })}
      </div>
      <div className={classes.searchContainer}>
        {props.characters.map(character => {
          return (
            search === "Hufflepuff" &&
            character.house === "Hufflepuff" && (
              <CharacterCard key={character._id} character={character} />
            )
          );
        })}
      </div>
      <div className={classes.searchContainer}>
        {props.characters.map(character => {
          return (
            search === "Ravenclaw" &&
            character.house === "Ravenclaw" && (
              <CharacterCard key={character._id} character={character} />
            )
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    characters: state.characters,
    isLoading: state.isLoading,
    search: state.search,
  };
};
export default connect(
  mapStateToProps,
  { getCharacters }
)(Characters);
