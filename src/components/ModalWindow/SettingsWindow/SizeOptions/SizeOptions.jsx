import React from 'react';

const SizeOptions = ({itemSize, setSize}) => {
  const active = itemSize===25 ? 'size-options-wrapper_active' : ' ';
  const active2 = itemSize===50 ? 'size-options-wrapper_active' : ' ';
  return <div className={'size-options-wrapper'}>
    <span className={active} onClick={setSize}>small</span>
    <span className={active2} onClick={setSize}>large</span>
  </div>
}

export default SizeOptions;
