import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "300px",
    margin: "auto",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  options: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto"
  
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
    fontFamily: "cursive",
    
  },
}));

const OrganizationDropDown = props => {
  console.log(props);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.section}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Organization</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
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
      <ExpansionPanel className={classes.section}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>House</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
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
