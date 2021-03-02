import React, {useEffect} from 'react';
import ColorOptions from "./colorOptions/ColorOptions";
import ColorOptionsContainer from "./colorOptions/ColorOptionsContainer";
import SizeOptionsContainer from "./SizeOptions/SizeOptionsContainer";
import Turn from "../../Turn/Turn";
import TurnContainer from "../../Turn/TurnContainer";

const SettingsWindow = ({closeSettings}) => {
  useEffect(() => {
    document.addEventListener('keydown', closeSettings)
    return () => {
      document.removeEventListener('keydown', closeSettings)
    }
  }, [])
  return <div className={'settings-window'}>
    <ul className={'settings-window__ul'}>
      <li>
        <span className={'li-item'} >color</span>
        <ColorOptionsContainer/>
      </li>
      <li className>
        <span className={'li-item'} >size</span>
        <SizeOptionsContainer/>
      </li>
      <li className={'li-item'}>speed</li>
      <TurnContainer/>
    </ul>
  </div>
}

export default SettingsWindow;
