import {connect} from "react-redux";
import SoundSettings from "./SoundSettings";
import {toggleEffectsAC, toggleMusicAC} from "../../../redux/reducers/mainReducer";



const mapDispatchToProps = (dispatch) => {
  return{
    toggleEffects: ()=>dispatch(toggleEffectsAC()),
    toggleMusic: ()=>dispatch(toggleMusicAC()),
    keyDown: ({code})=>{
      if(code === 'KeyE'){
        dispatch(toggleEffectsAC())
      }
      if(code === 'KeyM'){
        dispatch(toggleMusicAC())
      }
    }
  }
}

const mapStateToProps = ({position}) => {
  return{
    effects: position.sound.effects,
    music: position.sound.music,
  }
}
const SoundSettingsContainer = connect(mapStateToProps, mapDispatchToProps)(SoundSettings);

export default SoundSettingsContainer;
