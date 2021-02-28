import React from 'react';

const Fruit = ({position, color, size}) => {
  const {top, left} = position;
  return <div className={'fruit'} style={{height: size+'px', width: size + 'px', top: top + 'px', left: left + 'px', background: color}}/>
}

export default Fruit;
