import {connect} from "react-redux";
import SnakeField from "./SnakeField";
import {keyDownAC} from "../../redux/reducers/mainReducer";
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
