import React from 'react'
import {connect} from "react-redux";
import SnakeField from "./SnakeField";
import {checkBoomAC, checkEatAC, keyDownAC, moveAC} from "../../redux/reducers/keyDownReducer";
import {moveClearIntervalAC, moveSetIntervalAC} from "../../redux/reducers/setIntervalReducer";
import {setRandomColorAC} from "../../redux/reducers/colorsReducer";

const mapStateToProps = ({position}) => {
  return {
    size: position.fieldSize,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onKeyDown: (event) => {
      dispatch(keyDownAC(event.code))
      dispatch(setRandomColorAC(event))
    },
  }
}

const SnakeFieldContainer = connect(mapStateToProps, mapDispatchToProps)(SnakeField)

export default SnakeFieldContainer;
