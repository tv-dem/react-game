import './App.css';
import React from 'react';
import SnakeFieldContainer from "./components/SnakeField/snakeFieldContainer";
import {connect} from "react-redux";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import ModalWindowContainer from "./components/ModalWindow/ModalWindowContainer";
import StatisticContainer from "./components/Statistic/StatisticContainer";
import SettingsWindowContainer from "./components/ModalWindow/SettingsWindow/SettingsWindowContainer";


function app({isFail, size, isSettings}) {
  console.log('isFail:',isFail);
  return (
    <div>
      <div style={{width: size +'px', height: size+'px'}} className={'game-wrapper'}>
        {isFail && !isSettings && <ModalWindowContainer/>}
        {!isFail && !isSettings && <SnakeFieldContainer/>}
        {isSettings && <SettingsWindowContainer/>}
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
  }
}

const App = connect(mapStateToProps)(app)

export default App;
