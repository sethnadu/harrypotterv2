import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import '../../App.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: "300px",
    margin: "auto",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: "harry potter",
    fontSize: "1.3rem"
  },
  options: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    fontSize: "1.2rem"
  
  },
  singlePick: {
    pointer: "cursor",
    margin: "5px auto",
    fontFamily: "harry potter",
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
    
  },
}));

const SpellsDropDown = props => {
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
          <Typography className={classes.heading}>Spell Type</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.options}>
            <span
              className={classes.singlePick}
              onClick={() => props.handleType("Spell")}
            >
              Spell
            </span>{" "}
            <span
              className={classes.singlePick}
              onClick={() => props.handleType("Charm")}
            >
              Charm
            </span>
            <span
              className={classes.singlePick}
              onClick={() => props.handleType("Hex")}
            >
              Hex
            </span>{" "}
            <span
              className={classes.singlePick}
              onClick={() => props.handleType("Curse")}
            >
              Curse
            </span>{" "}
            <span
              className={classes.singlePick}
              onClick={() => props.handleType("Enchantment")}
            >
              Enchantment
            </span>{" "}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    
    </div>
  );
};

export default SpellsDropDown;
