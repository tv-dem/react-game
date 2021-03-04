import {toggleSpeed} from "../../redux/reducers/mainReducer";
import {connect} from "react-redux";
import Turn from "./Turn";

const mapStateToProps = (state) => {
  return{
    addSpeed: state.position.addSpeed,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSpeed: ({target}) => {
      target.classList.toggle('active');
      dispatch(toggleSpeed())
    },
  }
}

const TurnContainer = connect(mapStateToProps, mapDispatchToProps)(Turn);

export default  TurnContainer;
