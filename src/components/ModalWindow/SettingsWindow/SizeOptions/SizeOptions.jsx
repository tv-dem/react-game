import React from 'react';

const SizeOptions = ({fieldSize, itemSize, setSize}) => {
  const active = 'size-options-wrapper_active';
  return <div className={'size-options-wrapper'}>
    <span className={itemSize===25?active:''} onClick={setSize}>small</span>
    <span className={itemSize===50?active:''} onClick={setSize}>large</span>
  </div>
}

export default SizeOptions;
