import './App.css';
import React, {useEffect} from 'react';
import SnakeFieldContainer from "./components/SnakeField/snakeFieldContainer";
import ModalWindowContainer from "./components/ModalWindow/ModalWindowContainer";
import StatisticContainer from "./components/Statistic/StatisticContainer";
import SettingsWindowContainer from "./components/ModalWindow/SettingsWindow/SettingsWindowContainer";
import ResultsWindowContainer from "./components/ModalWindow/ResultsWindow/ResultsWindowContainer";
import {connect} from "react-redux";
import {playMusicAC, toggleMusicAC} from "./redux/reducers/mainReducer";


function Appp({isFail, size, isSettings, isBestResultsWindow, startPlayMusic, stopPlayMusic}) {
  useEffect(()=>{
    startPlayMusic();
  }, []);
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
    audio: position.sound.url,
    size: position.fieldSize,
    isFail: position.isFail,
    isSettings: window.isSettingsWindow,
    isBestResultsWindow: window.isBestResultsWindow,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    startPlayMusic: ()=>dispatch(playMusicAC()),
    stopPlayMusic: ()=>dispatch(toggleMusicAC())
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Appp)

export default App;
