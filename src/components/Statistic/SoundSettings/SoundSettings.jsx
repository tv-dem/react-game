import React, {useEffect} from 'react';

const SoundSettings = ({effects, music, toggleEffects, toggleMusic, keyDown}) => {
  useEffect(()=>{
    document.addEventListener('keydown', keyDown);
    return ()=> document.removeEventListener('keydown', keyDown)
  })
  const addClassSound = effects ? 'active' : true
  const addClassMusic = music ? 'active' : true
  return <div className={'sound-settings'}>
    <span onClick={toggleMusic} className={'sound '+addClassMusic} >music(m)</span>
    <span onClick={toggleEffects} className={'effect '+addClassSound}>effects(e)</span>
    <br/>
    <span>use keys wasd or arrows to move</span>
    <span>you can change colors. hit tab for this</span>
    <span>for new game press space(from main menu)</span>
  </div>
}

export default SoundSettings;
