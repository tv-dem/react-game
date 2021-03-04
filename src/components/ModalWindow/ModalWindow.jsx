import React, {useEffect} from 'react';

const ModalWindow = ({createNewGame, openSettings, openBestResults, createNewGameBySpace}) => {
  useEffect(()=>{
    document.addEventListener('keydown', createNewGameBySpace)
    return ()=> document.removeEventListener('keydown', createNewGameBySpace)
  })
  return <div className={'modal'}>
      <ul className={'modal-ul'}>
        <li onClick={createNewGame}>New game</li>
        <li onClick={openBestResults}>best result</li>
        <li onClick={openSettings}>options</li>
      </ul>
  </div>
}

export default ModalWindow;
