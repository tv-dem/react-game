import React, {useEffect} from 'react';

import FruitContainer from "../Fruit/FruitContainer";
import SnakeContainer from "../Snake/SnakeContainer";

const SnakeField = ({onKeyDown}) => {
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    }
  }, []);
  return (
    <div>
      <SnakeContainer />
      <FruitContainer />
    </div>
  )
}

export default SnakeField;
