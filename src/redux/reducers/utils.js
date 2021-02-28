const LEFT_DIRECTION = 'LEFT_DIRECTION';
const TOP_DIRECTION = 'TOP_DIRECTION';
const RIGHT_DIRECTION = 'RIGHT_DIRECTION';
const BOTTOM_DIRECTION = 'BOTTOM_DIRECTION';

const generateFruitPos = (fieldSize, itemSize, snakePos) => {
  let top, left = 0;
  const k = fieldSize / itemSize;
  do{
    top = getRandomInt(k) * itemSize;
    left = getRandomInt(k) * itemSize;
  } while(snakePos.findIndex(pos => pos.left === left && pos.top === top) !== -1);
  return {top, left};
}

const getRandomInt = (max) => {
  return Math.floor(Math.random(max) * max)
}

const generateNewHead = (pos, direction, fieldSize, itemSize) => {
  const sideSize = fieldSize - itemSize;
  const {top, left} = pos;
  switch(direction){
    case LEFT_DIRECTION:
      return {top, left: left === 0 ? sideSize : left - itemSize};
    case RIGHT_DIRECTION:
      return {top, left: left === sideSize ? 0 : left + itemSize};
    case BOTTOM_DIRECTION:
      return {left, top: top === sideSize ? 0 : top + itemSize};
    case TOP_DIRECTION:
      return {left, top: top === 0 ? sideSize : top - itemSize};
    default: return null;
  }
}

const checkImposition = (head, point) => {
  return head.left === point.left && head.top === point.top;
}

export{
  generateFruitPos,
  getRandomInt,
  generateNewHead,
  checkImposition,
  LEFT_DIRECTION,
  TOP_DIRECTION,
  RIGHT_DIRECTION,
  BOTTOM_DIRECTION,
}
