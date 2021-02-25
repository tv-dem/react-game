import React from 'react';
import {connect} from "react-redux";
import Fruit from "./Fruit";

const mapStateToProps = (state) => {
  return{
    position: state.position.fruitPos,
  }
}

const FruitContainer = connect(mapStateToProps)(Fruit)

export default FruitContainer;
