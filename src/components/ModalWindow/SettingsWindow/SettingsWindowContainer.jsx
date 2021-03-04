import {toggleSettingsWindowAC} from "../../../redux/reducers/windowReducer";
import SettingsWindow from "./SettingsWindow";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return{
    closeSettings: ()=> dispatch(toggleSettingsWindowAC()),
    OnEsc: ({code}) => {
      if(code === 'Escape') {
        dispatch(toggleSettingsWindowAC())
      }
    }
  }
}

const SettingsWindowContainer = connect(null, mapDispatchToProps)(SettingsWindow);

export default  SettingsWindowContainer
