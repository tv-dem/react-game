import React, {useEffect} from 'react';
import ColorOptionsContainer from "./colorOptions/ColorOptionsContainer";
import SizeOptionsContainer from "./SizeOptions/SizeOptionsContainer";
import TurnContainer from "../../Turn/TurnContainer";

const SettingsWindow = ({closeSettings, OnEsc}) => {
  useEffect(() => {
    document.addEventListener('keydown', OnEsc)
    return () => {
      document.removeEventListener('keydown', OnEsc)
    }
  })
  return <div className={'settings-window'}>
    <ul className={'settings-window__ul'}>
      <li>
        <span className={'li-item'} >color</span>
        <ColorOptionsContainer/>
      </li>
      <li>
        <span className={'li-item'} >size</span>
        <SizeOptionsContainer/>
      </li>
      <li className={'li-item'}>
       speed
      </li>
      <TurnContainer/>

      <li className={'li-item back'} onClick={closeSettings}>back</li>
    </ul>
  </div>
}

export default SettingsWindow;
