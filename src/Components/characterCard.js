import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../App.css"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  container: {
    display: "flex",
    margin: "10px auto",
    flexFlow: "row wrap",
    justifyContent: "center",

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "1.2rem",
    fontFamily: "harry potter"
  },
  panel: {
    width: "400px"
  },
  text: {
      textAlign: "left",
      fontFamily: "harry potter"
  },
  organ1: {
    color: "#1d4ba0"
  },
  organ2: {
    color: "#59958b"
  },
  organ3: {
    color: "#7d6142"
  },
  organ4: {
    color: "#8c1000"
  }
}));

const CharacterCard = ({character}) => {
  const classes = useStyles();
  return (
    <div className = {classes.container}>
      <ExpansionPanel className = {classes.panel}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{character.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className = {classes.text}>
            <span>{character.species ? ("Species: " + character.species ): (null)}</span>
            {character.species ? (<br></br>): (null)}
            <span>{character.role ? ("Role: "  + character.role) : (null)}</span>
            {character.role ? (<br></br>): (null)}
            <span>{character.school ? ("School: " + character.school) : (null)}</span>
            {character.school ? (<br></br>): (null)}
            <span>{character.house ? ("House: "  + character.house) : (null)}</span>
            {character.house ? (<br></br>): (null)}
            <span>{character.bloodStatus ? ("Blood Status: " + character.bloodStatus) : (null)}</span>
            {character.bloodStatus ? (<br></br>): (null)}
            <span className = {classes.organ1}>{character.dumbledoresArmy ? ("In Dumbledore's Army"): (null)}</span>
            {character.dumbledoresArmy ? (<br></br>): (null)}
            <span className = {classes.organ2}>{character.deathEater ? ("Death Eater"): (null)}</span>
            {character.deathEater ? (<br></br>): (null)}
            <span className = {classes.organ3}>{character.ministryOfMagic ? ("In The Ministry of Magic"): (null)}</span>
            {character.ministryOfMagic ? (<br></br>): (null)}
            <span className = {classes.organ4}>{character.orderOfThePhoenix ? ("In The Order of the Phoenix"): (null)}</span>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default CharacterCard;
