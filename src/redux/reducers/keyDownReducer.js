const KEY_DOWN = 'KEY_DOWN';
const MOVE = 'MOVE';
const CHECK_BOOM = 'CHECK_BOOM'

const LEFT_DIRECTION = 'LEFT_DIRECTION';
const TOP_DIRECTION = 'TOP_DIRECTION';
const RIGHT_DIRECTION = 'RIGHT_DIRECTION';
const BOTTOM_DIRECTION = 'BOTTOM_DIRECTION';

const initState = {
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
  ]
}

const keyDownReducer = (state = initState, action) => {
  const {direction, fieldSize, itemSize, snakePos} = state;
  switch (action.type) {
    case CHECK_BOOM:{
      const hTop = snakePos[snakePos.length - 1].top;
      const hLeft = snakePos[snakePos.length - 1].left;
      console.log(snakePos.length - 1)
      const isFail = snakePos.findIndex((el, i )=> {
        const {top, left} = el;
        console.log(top, left, hTop, hLeft);
        return top === hTop && left === hLeft && i !== snakePos.length - 1;
      })
      console.log(isFail, snakePos)
      return {...state, isFail: isFail !== -1}
    }
    case MOVE:
      switch(direction){
        case LEFT_DIRECTION:{
          const s = [...snakePos];
          const {left, top} = s[s.length - 1];
          const head = {top, left: left === 0 ? fieldSize : left - itemSize};
          s.shift();
          return {...state, snakePos: [...s, head]};
        }
        case RIGHT_DIRECTION: {
          const s = [...snakePos];
          const {left, top} = s[s.length - 1];
          const head = {top, left: left === fieldSize ? 0 : left + itemSize};
          s.shift();
          return {...state, snakePos: [...s, head]};
        }
        case BOTTOM_DIRECTION: {
          const s = [...snakePos];
          const {left, top} = s[s.length - 1];
          const head = {left, top: top === fieldSize ? 0 : top + itemSize};
          s.shift();
          return {...state, snakePos: [...s, head]};
        }
        case TOP_DIRECTION: {
          const s = [...snakePos];
          const {left, top} = s[s.length - 1];
          const head = {left, top: top === 0 ? fieldSize : top - itemSize};
          s.shift();
          return {...state, snakePos: [...s, head]};
        }
        default:
          return {...state}
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
    default: return state;
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
}
