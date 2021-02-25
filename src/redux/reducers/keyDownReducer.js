const KEY_DOWN = 'KEY_DOWN';
const MOVE = 'MOVE';
const CHECK_BOOM = 'CHECK_BOOM';
const GENERATE_FRUIT = 'GENERATE_FRUIT';
const CHECK_EAT = 'CHECK_EAT';


const LEFT_DIRECTION = 'LEFT_DIRECTION';
const TOP_DIRECTION = 'TOP_DIRECTION';
const RIGHT_DIRECTION = 'RIGHT_DIRECTION';
const BOTTOM_DIRECTION = 'BOTTOM_DIRECTION';

const initState = {
  fruitPos: {
    top: 450,
    left: 450,
  },
  isFail: false,
  direction: RIGHT_DIRECTION,
  fieldSize: 450,
  itemSize: 50,
  snakePos: [
    {
      left: 0,
      top: 0,
    },
    {
      left: 50,
      top: 0,
    },
    {
      left: 100,
      top: 0,
    },
    {
      left: 150,
      top: 0,
    },
    {
      left: 200,
      top: 0,
    },
    {
      left: 250,
      top: 0,
    },
    {
      left: 300,
      top: 0,
    }
  ],
  prevTail: {
    left: 450,
    top: 0,
  },
}

const generateFruitPos = (fieldSize, itemSize, snakePos) => {
  let top, left = 0;
  const k = fieldSize / itemSize + 1;
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
  const {top, left} = pos;
  switch(direction){
    case LEFT_DIRECTION:
      return {top, left: left === 0 ? fieldSize : left - itemSize};
    case RIGHT_DIRECTION:
      return {top, left: left === fieldSize ? 0 : left + itemSize};
    case BOTTOM_DIRECTION:
      return {left, top: top === fieldSize ? 0 : top + itemSize};
    case TOP_DIRECTION:
      return {left, top: top === 0 ? fieldSize : top - itemSize};
    default: return null;
  }
}

const checkImposition = (head, point) => {
  return head.left === point.left && head.top === point.top;
}

const keyDownReducer = (state = initState, action) => {
  const {direction, fieldSize, itemSize, snakePos, fruitPos, prevTail} = state;
  switch (action.type) {
    case CHECK_BOOM:{
      const head = snakePos[snakePos.length - 1];
      const isFail = snakePos.findIndex((point, i )=> {
        return checkImposition(head, point) && i !== snakePos.length - 1;
      })
      return {...state, isFail: isFail !== -1}
    }
    case MOVE: {
      const s = [...snakePos];
      const head = generateNewHead(s[s.length - 1], direction, fieldSize, itemSize)
      if(!head) {
        return state;
      }
      s.shift();
      return {...state, snakePos: [...s, head], prevTail: {...snakePos[0]}};
    }
    case KEY_DOWN: {
      switch (action.key) {
        case 'ArrowDown': {
          if(state.direction === TOP_DIRECTION) {
            return state;
          }
          return {...state, direction: BOTTOM_DIRECTION}
        }
        case 'ArrowUp': {
          if(state.direction === BOTTOM_DIRECTION) {
            return state;
          }
          return {...state, direction: TOP_DIRECTION}
        }
        case 'ArrowLeft': {
          if(state.direction === "RIGHT_DIRECTION") {
            return state;
          }
          return {...state, direction: LEFT_DIRECTION}
        }
        case 'ArrowRight': {
          if(state.direction === LEFT_DIRECTION) {
            return state;
          }
          return {...state, direction: RIGHT_DIRECTION}
        }
        default:
          return {...state};
      }
    }
    case CHECK_EAT:{
      const head = snakePos[snakePos.length - 1];
      const isEate = checkImposition(head, fruitPos);
      if(!isEate){
        return state;
      }
      const newFruitPos = generateFruitPos(fieldSize, itemSize, snakePos);
      return {...state, snakePos: [prevTail, ...snakePos], fruitPos: newFruitPos};
    }
    default: return state;
  }
}

const checkEatAC = () => {
  return{
    type: CHECK_EAT,
  }
}

const moveAC = () => {
  return{
    type: MOVE,
  }
}

const keyDownAC = (key) => {
  return {
    type: KEY_DOWN,
    key,
  }
}

const checkBoomAC = () => {
  return {
    type: CHECK_BOOM,
  }
}
export default keyDownReducer;

export {
  keyDownAC,
  moveAC,
  checkBoomAC,
  checkEatAC
}
