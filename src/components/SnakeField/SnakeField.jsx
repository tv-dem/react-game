import React, {useEffect} from 'react';
import Snake from "../Snake/Snake";

const SnakeField = ({pos, move, onKeyDown, checkBoom, fail, setIntervalMove, clearIntervalMove}) => {
  useEffect(() => {
    const event = document.addEventListener('keydown', ({code}) => {
      onKeyDown(code)
    })
    return () => {
      document.removeEventListener('keydown', event);
    }
  }, []);
  return (
    <div className={'wrapper'}>
      <Snake pos={pos} move={move} checkBoom={checkBoom} fail={fail} setIntervalMove={setIntervalMove} clearIntervalMove={clearIntervalMove}/>
    </div>
  )
}

export default SnakeField;
