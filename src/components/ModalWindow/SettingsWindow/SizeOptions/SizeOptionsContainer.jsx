import React from "react";
import {connect} from "react-redux";
import {setSizeAC} from "../../../../redux/reducers/keyDownReducer";
import SizeOptions from "./SizeOptions";

const mapStateToProps = (state) => {
  return{
    fieldSize: state.position.fieldSize,
    itemSize: state.position.itemSize,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSize: (e) => {
      console.log(e.target.textContent)
      const size = e.target.textContent;
      let rez = 50;
      switch (size){
        case 'large':
          rez = 50;
          break;
        case 'small':
          rez = 25;
          break;
        default:
          break;
      }
      dispatch(setSizeAC(rez))
    },
  }
}

const SizeOptionsContainer = connect(mapStateToProps, mapDispatchToProps)(SizeOptions);

export default  SizeOptionsContainer
