import React, {useEffect} from 'react';

const Snake = ({pos, move, checkBoom, fail, setIntervalMove, clearIntervalMove, checkEat, color, speed, size}) => {
  useEffect(() => {
    setIntervalMove([move, checkBoom, checkEat], speed);
    return () => {
      clearIntervalMove()
    };
  }, [fail, speed]);
  return (
    <div className={'snake'}>
      {pos.map(({top, left}, i) => {
        return (
          <div className="snakeItem"
               key={i}
               style={{
                 height: size+'px',
                 width: size+'px',
                 top: top + 'px',
                 left: left + 'px',
                 backgroundColor: color,
               }}
          />
        )
      })}
    </div>
  )
}

export default Snake;
