import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { makeStyles } from "@material-ui/core/styles";
import { getHouses } from "../Actions";
import "../App.css";

import GryffindorCrest from "../Assets/images/gryffindorcrest.png";
import SlytherinCrest from "../Assets/images/slytherincrest.png";
import HufflepuffCrest from "../Assets/images/hufflepuffcrest.png";
import RavenclawCrest from "../Assets/images/ravenclaw.png";

import HousesCard from "./housesCard.js";

const useStyles = makeStyles(() => ({
  container: {
    margin: "30px",
    fontFamily: "harry potter",
  },
  title: {
    fontSize: "2.4rem",
    fontFamily: "harry potter",
  },
  image: {
    maxWidth: "700px",
    width: "100%",
    borderRadius: "10px",
  },
  subtitle: {
    fontSize: "1.8rem",
    fontFamily: "harry potter",
  },
  section: {
    margin: "auto",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
  },
  houseCrest: {
      maxWidth: "180px",
      maxHeight: "180px",
      width: "100%",
      margin: "10px",
      borderRadius: "10px",
      boxShadow: "5px 5px 10px "
  }
}));

const Houses = ({ getHouses, isLoading, houses }) => {
  const classes = useStyles();
  useEffect(() => {
    return getHouses();
  }, [getHouses]);

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Houses</h2>
      <div>
        <img className={classes.houseCrest} src={GryffindorCrest} alt="Gryffindor Crest" />
        <img className={classes.houseCrest} src={SlytherinCrest} alt="Slytherin Crest" />
        <img className={classes.houseCrest} src={HufflepuffCrest} alt="Hufflepuff Crest" />
        <img className={classes.houseCrest} src={RavenclawCrest} alt="Ravenclaw Crest" />
      </div>

      {isLoading ? (
        <Loader type="BallTriangle" color="#e22121" height={100} width={100} />
      ) : (
        ""
      )}
      <div className={classes.section}>
        {houses.map(house => {
          return <HousesCard key={house._id} house={house} />;
        })}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    houses: state.houses,
    isLoading: state.isLoading,
  };
};
export default connect(
  mapStateToProps,
  { getHouses }
)(Houses);
