import React from 'react';

const ModalWindow = ({createNewGame, openSettings}) => {
  return <div className={'modal'}>
      <ul className={'modal-ul'}>
        <li onClick={createNewGame}>New game</li>
        <li>best result</li>
        <li onClick={openSettings}>options</li>
      </ul>
  </div>
}

export default ModalWindow;
