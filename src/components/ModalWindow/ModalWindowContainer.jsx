import {connect} from "react-redux";
import ModalWindow from "./ModalWindow";
import {newGameAC} from "../../redux/reducers/mainReducer";
import {
  toggleModalWindowAC,
  toggleResultsWindowAC,
  toggleSettingsWindowAC
} from "../../redux/reducers/windowReducer";

const mapDispatchToProps = (dispatch) => {
  return {
    createNewGameBySpace: ({code}) => {
      if (code === 'Space') {
        dispatch(newGameAC())
        dispatch(toggleModalWindowAC())
      }
    },
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

export default ModalWindowContainer
