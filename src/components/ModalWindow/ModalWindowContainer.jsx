import React from "react";
import {connect} from "react-redux";
import ModalWindow from "./ModalWindow";
import {newGameAC} from "../../redux/reducers/keyDownReducer";
import {
  toggleModalWindowAC,
  toggleResultsWindowAC,
  toggleSettingsWindowAC
} from "../../redux/reducers/openSettingsWindow";

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
  return{
    createNewGame: () => {
      dispatch(newGameAC())
      dispatch(toggleModalWindowAC())
    },
    openSettings: () => dispatch(toggleSettingsWindowAC()),
    openBestResults: () => {
      dispatch(toggleResultsWindowAC())
    }
  }
}

const ModalWindowContainer = connect(null, mapDispatchToProps)(ModalWindow);

export default  ModalWindowContainer
