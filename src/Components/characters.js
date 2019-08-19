import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { makeStyles } from "@material-ui/core/styles";

import { getCharacters } from "../Actions";

import CharacterCard from "./characterCard.js";

/////////// Styling ////////////////////////////////////////
const useStyles = makeStyles(() => ({
  container: {
    margin: "30px",
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
  organization: {
    width: "200px",
    display: "flex",
    flexFlow: "column",
    fontSize: ".9rem",
    margin: "auto",
    alignItems: "center"
  },
  options: {
      cursor: "pointer",
      color: "#8d0901",
      "&:hover": {
        fontSize:"1.2rem",
        color: "#f8c20e"
      },
  },
  searchOptions: {
      width: "350px",
      display: "flex",
      flexDirection: "row",
      margin: "auto",
      justifyContent: "center",
      borderRadius: "15px",
      backgroundColor: "seashell"

  },
  Slytherin: {
    cursor: "pointer",
    color: "#005c43",
    "&:hover": {
      fontSize:"1.2rem",
      color: "#aaaaaa"
    },
    },
    Gryffindor: {
        cursor: "pointer",
        color: "#8d0901",
        "&:hover": {
        fontSize:"1.2rem",
        color: "#f8c20e"
        },
    },
    Ravenclaw: {
        cursor: "pointer",
        color: "#004e7f",
        "&:hover": {
        fontSize:"1.2rem",
        color: "#a67a53"
        },
    },
    Hufflepuff: {
        cursor: "pointer",
        color: "black",
        "&:hover": {
          fontSize:"1.2rem",
          color: "#d99230"
        },
    },

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

  const handledumbledoresArmy = event => {
    setSearch("dumbledoresArmy");
    event.preventDefault();
    props.getCharacters();
  };

  const handleDeathEaters = event => {
    setSearch("deathEaters");
    event.preventDefault();
    props.getCharacters();
  };

  const handleOrderOfThePhoenix = event => {
    setSearch("orderOfThePhoenix");
    event.preventDefault();
    props.getCharacters();
  };

  const handleMinistryOfMagic = event => {
    setSearch("ministryOfMagic");
    event.preventDefault();
    props.getCharacters();
  };

  const handleGryffindor = event => {
    setSearch("Gryffindor");
    event.preventDefault();
    props.getCharacters();
  };

  const handleSlytherin = event => {
    setSearch("Slytherin");
    event.preventDefault();
    props.getCharacters();
  };

  const handleHufflepuff = event => {
    setSearch("Hufflepuff");
    event.preventDefault();
    props.getCharacters();
  };

  const handleRavenclaw = event => {
    setSearch("Ravenclaw");
    event.preventDefault();
    props.getCharacters();
  };

  return (
    <div className={classes.container}>
      <h2>Harry Potter Characters</h2>
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
      <div className = {classes.searchOptions}>
          <p onClick></p>
        <div className={classes.organization}>
          <p>Sort by Organization</p>
          <p className={classes.options}  onClick={handleDeathEaters}>Death Eater's</p>{" "}
          <p className={classes.options}  onClick={handleMinistryOfMagic}>Ministry of the Magic</p>
          <p className={classes.options}  onClick={handledumbledoresArmy}>Dumbledore's Army</p>{" "}
          <p className={classes.options}  onClick={handleOrderOfThePhoenix}>Order of the Phoenix</p>{" "}
        </div>
        <div className={classes.organization}>
        <p>Sort by House</p>
          <p className={classes.Gryffindor}  onClick={handleGryffindor}>Gryffindor</p>{" "}
          <p className={classes.Hufflepuff}  onClick={handleHufflepuff}>Hufflepuff</p>{" "}
          <p className={classes.Slytherin}  onClick={handleSlytherin}>Slytherin</p>{" "}
          <p className={classes.Ravenclaw}  onClick={handleRavenclaw}>Ravenclaw</p>
        </div>
      </div>
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
            character.orderOfThePhoenix === true && (
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
