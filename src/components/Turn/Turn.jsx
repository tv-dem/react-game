import React from 'react';

const Turn = ({toggleSpeed, addSpeed}) => {
  const addClass = addSpeed ? 'active' : '';
  return <div onClick={toggleSpeed} className={'turn ' + addClass}>

  </div>
}

export default Turn;
