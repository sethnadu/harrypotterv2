import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../../App.css";


import deathlyHollows from "../../Assets/images/deathlyhollows.png"

const useStyles = makeStyles(theme => ({
  root: {
    width: "300px",
    margin: "auto",
  },
  heading: {
    fontFamily: "harry potter",
    fontSize: "1.2rem",
    textAlign: "left",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    fontFamily: "harry potter",
    fontSize: "1.2rem",
  },
  singlePick: {
    pointer: "cursor",
    margin: "5px auto",
    "&:hover": {
      color: "#8d0901",
      transform: "scale(1.2)",
      cursor: "pointer",
    },
  },
  section: {
    backgroundColor: "#f8c20e",
    border: "2px solid #8d0901",
    color: "black",
    fontWeight: "bold",
    fontFamily: "harry potter",
  },
  nonhumanSection: {
    backgroundColor: "#f8c20e",
    border: "2px solid #8d0901",
    color: "black",
    fontWeight: "bold",
    fontFamily: "harry potter",
    display: "flex",
    justifyContent: "space-between",
  },
  deathlyhollowsImage: {
    width: "50px",
    height: "50px",
    marginRight: "10px"
  }
}));

const OrganizationDropDown = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangeBack = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : true);
  };

  return (
    <div className={classes.root}>
       <div
        className={classes.nonhumanSection}
        onClick={() => props.handleSpecies("species")}
      >
        <p
          className={classes.heading}
          style={{
            marginLeft: "25px",
            cursor: "pointer",
            fontWeight: "normal"
          }}
        >
          Non-Humans
        </p>
        <img className = {classes.deathlyhollowsImage} src ={deathlyHollows} alt ="Deathly hollows symbol" />
      </div>
      <ExpansionPanel
        className={classes.section}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Organization</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails onClick={handleChangeBack("panel1")}>
          <Typography className={classes.options}>
            <span
              className={classes.singlePick}
              onClick={() => props.handleOrganizaton("deathEaters")}
            >
              Death Eater's
            </span>{" "}
            <span
              className={classes.singlePick}
              onClick={() => props.handleOrganizaton("ministryOfMagic")}
            >
              Ministry of the Magic
            </span>
            <span
              className={classes.singlePick}
              onClick={() => props.handleOrganizaton("dumbledoresArmy")}
            >
              Dumbledore's Army
            </span>{" "}
            <span
              className={classes.singlePick}
              onClick={() => props.handleOrganizaton("orderOfThePhoenix")}
            >
              Order of the Phoenix
            </span>{" "}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        className={classes.section}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>House</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails onClick={handleChangeBack("panel2")}>
          <Typography className={classes.options}>
            <span
              className={classes.singlePick}
              onClick={() => props.handleHouse("Gryffindor")}
            >
              Gryffindor
            </span>{" "}
            <span
              className={classes.singlePick}
              onClick={() => props.handleHouse("Hufflepuff")}
            >
              Hufflepuff
            </span>{" "}
            <span
              className={classes.singlePick}
              onClick={() => props.handleHouse("Slytherin")}
            >
              Slytherin
            </span>{" "}
            <span
              className={classes.singlePick}
              onClick={() => props.handleHouse("Ravenclaw")}
            >
              Ravenclaw
            </span>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  );
};

export default OrganizationDropDown;
