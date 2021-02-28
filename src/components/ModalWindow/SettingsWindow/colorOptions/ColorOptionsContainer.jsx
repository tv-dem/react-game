import React from "react";
import {connect} from "react-redux";
import ColorOptions from "./ColorOptions";
import {setFruitColorAC, setSnakeColorAC} from "../../../../redux/reducers/colorsReducer";

const mapStateToProps = (state) => {
  // debugger
  return{
    colors: state.colors.colors,
    snake: state.colors.snakeColor,
    fruit: state.colors.fruitColor,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setSnakeColor: (color) => dispatch(setSnakeColorAC(color)),
    setFruitColor: (color) => dispatch(setFruitColorAC(color)),
  }
}

const ColorOptionsContainer = connect(mapStateToProps, mapDispatchToProps)(ColorOptions);

export default  ColorOptionsContainer
