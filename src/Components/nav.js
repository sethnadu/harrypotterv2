import React from "react";
import {Link} from "react-router-dom";


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


import HarryPotterLogo from "../Assets/Harry-Potter-Logo.png";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  logo: {
      maxWidth: "120px",
  },
  buttonColors: {
      color: "#f8c20e",
      fontFamily: "cursive",
      fontWeight: "bold",
      
  },
  backgroundColor: {
    backgroundColor: "#8d0901",
  }
  
}));

function Nav() {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.backgroundColor} position="static">
        <Toolbar>
        <Button color="inherit" className={classes.buttonColors}>Home</Button>
        <Button color="inherit" className={classes.buttonColors}><Link style = {{textDecoration: "none", color: "#f8c20e"}}  to ="/characters">Names</Link></Button>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <img className = {classes.logo} alt = "Harry Potter Logo" src={HarryPotterLogo} />
          </Typography>
          <Button color="inherit"  className={classes.buttonColors}><Link style = {{textDecoration: "none", color: "#f8c20e"}} to ="/spells">Spells</Link></Button>
          <Button color="inherit"  className={classes.buttonColors}>Houses</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;