import React from 'react'
import {connect} from "react-redux";
import SnakeField from "./SnakeField";
import {checkBoomAC, keyDownAC, moveAC} from "../../redux/reducers/keyDownReducer";
import {moveClearIntervalAC, moveSetIntervalAC} from "../../redux/reducers/setIntervalReducer";

const mapStateToProps = ({position}) => {
  return {
    pos: position.snakePos,
    fail: position.isFail,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    move: () => dispatch(moveAC()),
    checkBoom: ()=>dispatch(checkBoomAC()),
    onKeyDown: (code) => dispatch(keyDownAC(code)),
    setIntervalMove: (callbacks, time) => dispatch(moveSetIntervalAC(callbacks, time)),
    clearIntervalMove: () => dispatch(moveClearIntervalAC()),
  }
}

const SnakeFieldContainer = connect(mapStateToProps, mapDispatchToProps)(SnakeField)

export default SnakeFieldContainer;
