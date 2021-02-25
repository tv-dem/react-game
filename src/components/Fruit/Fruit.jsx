import React from 'react';

const Fruit = ({position}) => {
  const {top, left} = position;
  return <div className={'fruit'} style={{top: top + 'px', left: left + 'px'}}/>
}

export default Fruit;
