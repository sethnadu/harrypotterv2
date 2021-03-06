import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "./nav";
import { getSpells } from "../Actions";
import SpellsCard from "./spellsCard.js";
import SpellsDropDown from "./Organizationcomponents/spellsDropDown.js";
import "../App.css";

import WandImage from "../Assets/wand.jpg";

const useStyles = makeStyles(() => ({
  container: {
    margin: "30px",
  },
  searchContainer: {
    margin: "120px 20px 0 20px",
    fontFamily: "harry potter",
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
    fontSize: "2.4rem",
  },
  image: {
    maxWidth: "700px",
    width: "100%",
    borderRadius: "10px",
  },
  subtitle: {
    fontSize: "1.8rem",
  },
  copyrightDiv: {
    bottom: "0",
    position: "fixed",
    display: "flex",
    flexDirection: "row wrap",
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
    setSearchSpell(name);
    props.getSpells();
  };

  return (
    <div className="App">
      <Nav />
      <div className={classes.container}>
        <h2 className={classes.title}>Spells</h2>
        <img
          className={classes.image}
          src={WandImage}
          alt="Ollivanders shop drawing"
        />
        <form className={classes.form}>
          <p className={classes.subtitle}>Search Spell by Name</p>
          <input
            className={classes.textInput}
            type="text"
            onChange={handleChange}
            placeholder="ex. Avada Kedavra"
          />
        </form>
        <p>(Case Sensitive)</p>
        <SpellsDropDown handleType={handleType} getSpells={props.getSpells} />
        {props.isLoading ? (
          <Loader
            type="BallTriangle"
            color="#e22121"
            height={100}
            width={100}
          />
        ) : (
          ""
        )}

        <div className={classes.searchContainer}>
          {props.spells.map(spell => {
            return (
              spell.spell.includes(`${searchSpell}`) &&
              searchSpell !== "" && <SpellsCard key={spell._id} spell={spell} />
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
      <footer className={classes.copyrightDiv}>
        <p>
          Api:{" "}
          <a className={classes.linkColor} href="https://www.potterapi.com/">
            https://www.potterapi.com/
          </a>
        </p>{" "}
        <p>
          Created by:{" "}
          <a className={classes.linkColor} href="https://github.com/sethnadu">
            Seth Nadu
          </a>
        </p>
      </footer>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    spells: state.spells,
    isLoading: state.isLoading,
  };
};
export default connect(
  mapStateToProps,
  { getSpells }
)(Spells);
