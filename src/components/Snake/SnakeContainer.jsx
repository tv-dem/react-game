import {connect} from "react-redux";
import {checkBoomAC, checkEatAC, moveAC} from "../../redux/reducers/mainReducer";
import {moveClearIntervalAC, moveSetIntervalAC} from "../../redux/reducers/setIntervalReducer";
import Snake from "./Snake";
import {toggleModalWindowAC} from "../../redux/reducers/windowReducer";

const mapStateToProps = ({position, colors}) => {
  return {
    color: colors.snakeColor,
    pos: position.snakePos,
    fail: position.isFail,
    speed: position.speed,
    size: position.itemSize,
    direction: position.direction,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    move: () => dispatch(moveAC()),
    checkBoom: ()=>dispatch(checkBoomAC()),
    setIntervalMove: (callbacks, time) => dispatch(moveSetIntervalAC(callbacks, time)),
    clearIntervalMove: () => dispatch(moveClearIntervalAC()),
    checkEat: () => dispatch(checkEatAC()),
    callModalWindow: ()=> dispatch(toggleModalWindowAC())
  }
}

const SnakeContainer = connect(mapStateToProps, mapDispatchToProps)(Snake)

export default SnakeContainer;
