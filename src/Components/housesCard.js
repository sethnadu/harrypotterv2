import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import "../App.css"


// import Ravenclaw from "../Assets/ravenclaw.png"
// import Gryffindor from "../Assets/gryfindor.png"
// import Slytherin from "../Assets/slytherin.jpg"
// import Hufflepuff from "../Assets/hufflepuff.jpg"
import HogwartsCastle from "../Assets/hogwartscastle.jpg"
import Logo from '../Assets/logo.jpg'

const useStyles = makeStyles(theme => ({
  card: {
    width: "300px",
    margin: "30px",
    fontFamily: "harry potter"
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    fontFamily: "harry potter" // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    width: "50px",
    borderRadius: "25px"
  },
  info: {
      textAlign: "left",
      fontFamily: "harry potter",
      fontSize: "1.2rem"
  },
  titleInfo: {
    fontFamily: "harry potter",
    fontSize: "1.3rem"
  }
}));


const HousesCard = ({house}) => {
    const classes = useStyles();
//   const imageArray = [{Gryffindor},{Ravenclaw},{Slytherin},{Hufflepuff}];

    // imageArray.map(imageeach => {
    //   return imageeach
    // })

  return (
    <Card className={classes.card}>
    <CardHeader className = {classes.titleInfo}
      avatar={
        <img src = {Logo} className={classes.avatar} alt = "harry potter logo" />
      }
      action={
        <IconButton aria-label="settings">
      
        </IconButton>
      }
      title ={<span className = {classes.titleInfo}> {house.name} </span>}
      subheader={<span className = {classes.titleInfo}>Founded by {house.founder}</span>}
    />
    <CardMedia 
      className={classes.media}
      image={HogwartsCastle}
      title="Paella dish"
    />
    <CardContent>
      <Typography className={classes.info} variant="body2" color="textSecondary" component="div">
      <span>{house.school ? (house.school) : ("Hogwarts School of Witchcraft and Wizardry")}</span>
        <br />
        <span>Head of House: {house.headOfHouse}</span>
        <br />
        Colors: {house.colors.map(color => {return (<><span>{color}</span><span>{"  "}</span></>)})}
        <br />
        Mascot: {house.lion}
        <br />
        Ghost: {house.houseGhost}
        <br />
        Values: {house.values.map(value => {
            return (
                <><span key ={value}>{value}</span><span>{" "}</span></>
            )
        })} 
      </Typography>
    </CardContent>
  </Card>
  );
}

export default HousesCard;