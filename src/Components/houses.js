import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { makeStyles } from "@material-ui/core/styles";
import { getHouses } from "../Actions";


import HousesCard from "./housesCard.js"

const useStyles = makeStyles(() => ({
  container: {
    margin: "30px",
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
  section: {
      margin: "auto",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center"

  }
}));

const Houses = props => {
  const classes = useStyles();
  useEffect(() => {
    return props.getHouses();
  }, [props.getHouses]);



  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Houses</h2>
      {props.isLoading ? (
        <Loader type="BallTriangle" color="#e22121" height={100} width={100} />
      ) : (
        ""
      )}
      <div className={classes.section}>
     {props.houses.map(house => {
          return  <HousesCard key={house._id} house={house} />
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
