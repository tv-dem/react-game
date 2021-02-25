import React, {useEffect} from 'react';

const Snake = ({pos, move, checkBoom, fail, setIntervalMove, clearIntervalMove}) => {
  useEffect(() => {
    setIntervalMove([checkBoom, move], 100);
    return () => {
      clearIntervalMove()
    };
  }, [fail]);
  return (
    pos.map(({top, left}) => {
      return (
        <div className="snake"
             style={{top: top + 'px', left: left + 'px'}}
        />
      )
    })
  )
}

export default Snake;
