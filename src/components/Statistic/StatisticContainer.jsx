import Statistic from "./Statistic";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    score: state.position.score,
    bestScore: state.position.bestScore,
  }
}

const StatisticContainer = connect(mapStateToProps)(Statistic)

export default StatisticContainer;
