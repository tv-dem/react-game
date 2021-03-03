import './App.css';
import React from 'react';
import SnakeFieldContainer from "./components/SnakeField/snakeFieldContainer";
import ModalWindowContainer from "./components/ModalWindow/ModalWindowContainer";
import StatisticContainer from "./components/Statistic/StatisticContainer";
import SettingsWindowContainer from "./components/ModalWindow/SettingsWindow/SettingsWindowContainer";
import ResultsWindowContainer from "./components/ModalWindow/ResultsWindow/ResultsWindowContainer";
import {connect} from "react-redux";


function app({isFail, size, isSettings, isBestResultsWindow}) {
  console.log(isSettings, isBestResultsWindow)
  return (
    <div>
      <div style={{width: size +'px', height: size+'px'}} className={'game-wrapper'}>
        {isFail && !isSettings && !isBestResultsWindow && <ModalWindowContainer/>}
        {!isFail && <SnakeFieldContainer/>}
        {isSettings && <SettingsWindowContainer/>}
        {isBestResultsWindow && <ResultsWindowContainer/>}
      </div>
      <StatisticContainer/>
    </div>

  );
}

const mapStateToProps = ({position, window}) => {
  return{
    size: position.fieldSize,
    isFail: position.isFail,
    isSettings: window.isSettingsWindow,
    isBestResultsWindow: window.isBestResultsWindow,
  }
}

const App = connect(mapStateToProps)(app)

export default App;
