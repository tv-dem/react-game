import './App.css';
import React from 'react';
import SnakeFieldContainer from "./components/SnakeField/snakeFieldContainer";
import {connect} from "react-redux";
import ModalWindow from "./components/ModalWindow/ModalWindow";


function app({isFail}) {
  console.log('isFail:',isFail);
  return (
    <div className={'wrapper'}>
      {isFail ? <ModalWindow/> : <SnakeFieldContainer/>}
    </div>
  );
}

const mapStateToProps = ({position}) => {
  return{
    isFail: position.isFail,
  }
}

const App = connect(mapStateToProps)(app)

export default App;
