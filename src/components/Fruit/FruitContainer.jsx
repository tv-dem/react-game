import React from 'react';
import {connect} from "react-redux";
import Fruit from "./Fruit";

const mapStateToProps = (state) => {
  return{
    color: state.colors.fruitColor,
    position: state.position.fruitPos,
    size: state.position.itemSize,
  }
}

const FruitContainer = connect(mapStateToProps)(Fruit)

export default FruitContainer;
