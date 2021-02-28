import React, {useEffect} from 'react';

import FruitContainer from "../Fruit/FruitContainer";
import SnakeContainer from "../Snake/SnakeContainer";

const SnakeField = ({onKeyDown}) => {
  useEffect(() => {
    const foo = (event) => {
      onKeyDown(event)
    }
    document.addEventListener('keydown', foo)
    return () => {
      document.removeEventListener('keydown', foo);
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
