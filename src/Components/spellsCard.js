import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import '../App.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  heading: {
    fontFamily: "harry potter",
    fontSize: "1.2rem"
  },
  panel: {
    width: "400px"
  },
  text: {
      textAlign: "left",
      fontFamily: "harry potter",
      fontSize: "1.2rem"
  }
}));

const SpellsCard = ({spell}) => {
  const classes = useStyles();
  return (
    <div className = "Container">
      <ExpansionPanel className = {classes.panel}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{spell.spell}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className = {classes.text}>
            <span>{spell.effect ? ("Effect: " + spell.effect ): (null)}</span>
            {spell.effect ? (<br></br>): (null)}
            <span>{spell.type ? ("Type: " + spell.type ): (null)}</span>
            {spell.type ? (<br></br>): (null)}
          
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default SpellsCard;
