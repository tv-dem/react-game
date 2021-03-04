import {toggleResultsWindowAC} from "../../../redux/reducers/windowReducer";
import {connect} from "react-redux";
import ResultsWindow from "./ResultsWindow";

const mapStateToProps = ({position}) => {
  return {
    results: position.bestResults
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    closeSettings: ()=> dispatch(toggleResultsWindowAC()),
    OnEsc: ({code}) => {
      if(code === 'Escape') {
        dispatch(toggleResultsWindowAC())
      }
    }
  }
}
const ResultsWindowContainer = connect(mapStateToProps, mapDispatchToProps)(ResultsWindow);

export default ResultsWindowContainer;
