import React, {useEffect} from 'react';
import Snake from "../Snake/Snake";
import FruitContainer from "../Fruit/FruitContainer";

const SnakeField = ({pos, move, onKeyDown, checkBoom, fail, setIntervalMove, clearIntervalMove, checkEatAC}) => {
  useEffect(() => {
    const event = document.addEventListener('keydown', ({code}) => {
      onKeyDown(code)
    })
    return () => {
      document.removeEventListener('keydown', event);
    }
  }, []);
  return (
    <div>
      <Snake pos={pos} move={move} checkBoom={checkBoom} fail={fail} setIntervalMove={setIntervalMove} clearIntervalMove={clearIntervalMove} checkEatAC={checkEatAC}/>
      <FruitContainer />
    </div>
  )
}

export default SnakeField;
