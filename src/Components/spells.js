import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { makeStyles } from "@material-ui/core/styles";

import { getSpells } from "../Actions";
import SpellsCard from "./spellsCard.js";
import SpellsDropDown from "./Organizationcomponents/spellsDropDown.js"

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
  
  }));
  


const Spells = props => {
  const classes = useStyles();
  const [searchSpell, setSearchSpell] = useState("");

  const handleChange = event => {
    setSearchSpell(event.target.value);
    props.getSpells();
  };

  const handleType = name => {
      setSearchSpell(name)
      props.getSpells()
  }

  return (
    <div className={classes.container}>
      <h2>Spells</h2>
      <form className={classes.form}>
        <p>Search Spell by Name</p>
        <input
          className={classes.textInput}
          type="text"
          onChange={handleChange}
          placeholder="ex. Avada Kedavra"
        />
      </form>
      <p>(Case Sensitive)</p>
      <SpellsDropDown handleType = {handleType} getSpells = {props.getSpells}/>
      {props.isLoading ? (
        <Loader type="BallTriangle" color="#e22121" height={100} width={100} />
      ) : (
        ""
      )}


      <div className={classes.searchContainer}>
        {props.spells.map(spell => {
          return (
            spell.spell.includes(`${searchSpell}`) && 
            searchSpell !== "" && (
              <SpellsCard key={spell._id} spell={spell} />
            )
          );
        })}
      </div>

      <div className={classes.searchContainer}>
        {props.spells.map(spell => {
          return (
            searchSpell === "Spell" &&
            spell.type === "Spell" && (
              <SpellsCard key={spell._id} spell={spell} />
            )
          );
        })}
      </div>
      <div className={classes.searchContainer}>
        {props.spells.map(spell => {
          return (
            searchSpell === "Hex" &&
            spell.type === "Hex" && (
              <SpellsCard key={spell._id} spell={spell} />
            )
          );
        })}
      </div>
      <div className={classes.searchContainer}>
        {props.spells.map(spell => {
          return (
            searchSpell === "Charm" &&
            spell.type === "Charm" && (
              <SpellsCard key={spell._id} spell={spell} />
            )
          );
        })}
      </div>
      <div className={classes.searchContainer}>
        {props.spells.map(spell => {
          return (
            searchSpell === "Curse" &&
            spell.type === "Curse" && (
              <SpellsCard key={spell._id} spell={spell} />
            )
          );
        })}
      </div>
      <div className={classes.searchContainer}>
        {props.spells.map(spell => {
          return (
            searchSpell === "Enchantment" &&
            spell.type === "Enchantment" && (
              <SpellsCard key={spell._id} spell={spell} />
            )
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    spells: state.spells,
    isLoading: state.isLoading,
    search: state.search,
  };
};
export default connect(
  mapStateToProps,
  { getSpells }
)(Spells);
