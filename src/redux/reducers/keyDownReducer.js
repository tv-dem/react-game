import {
  generateFruitPos,
  generateNewHead,
  checkImposition, RIGHT_DIRECTION, TOP_DIRECTION, BOTTOM_DIRECTION, LEFT_DIRECTION,

} from './utils'
import eatSound from '../../assets/eat.mp3'


const KEY_DOWN = 'KEY_DOWN';
const MOVE = 'MOVE';
const CHECK_BOOM = 'CHECK_BOOM';
const CHECK_EAT = 'CHECK_EAT';
const NEW_GAME = 'NEW_GAME';
const CHANGE_SIZE = 'CHANGE_SIZE'
const TOGGLE_SPEED = 'TOGGLE_SPEED'

const initState = {
  bestResults: [],
  sound: {
    eatSound:{
      sound: new Audio(eatSound),
      doIt: true,
    }
  },
  addSpeed: true,
  speed: 100,
  fruitPos: {
    top: 450,
    left: 450,
  },
  score: 0,
  bestScore: 0,
  isFail: true,
  direction: RIGHT_DIRECTION,
  fieldSize: 500,
  itemSize: 25,
  snakePos: [
    {
      left: 0,
      top: 0,
    },
  ],
  prevTail: {
    left: 450,
    top: 0,
  },
}

const createDate = (date) => {
  const month = date.getMonth() + 1;
  return `${date.getDay() < 10 ? '0' + date.getDay() : date.getDay()}:${month < 10 ? '0' + month : month}:${date.getFullYear()}
  ${date.getHours()}:${date.getMinutes()}`;
}


const keyDownReducer = (state = initState, action) => {
  const {direction, fieldSize, itemSize, snakePos, fruitPos, prevTail, score, bestScore, speed, addSpeed, bestResults} = state;
  switch (action.type) {
    case CHECK_BOOM: {
      const head = snakePos[snakePos.length - 1];
      const isFail = snakePos.findIndex((point, i) => {
        return checkImposition(head, point) && i !== snakePos.length - 1;
      })
      return isFail === -1 ? state : {
        ...state,
        isFail: isFail !== -1,
        score: 0,
        bestResults:  [...bestResults, {score, time: createDate(new Date())}].sort((a, b) => a.score < b.score ? 1 : -1)
      }
    }
    case MOVE: {
      const s = [...snakePos];
      const head = generateNewHead(s[s.length - 1], direction, fieldSize, itemSize)
      if (!head) {
        return state;
      }
      s.shift();
      return {...state, snakePos: [...s, head], prevTail: {...snakePos[0]}};
    }
    case KEY_DOWN: {
      switch (action.key) {
        case 'ArrowDown': {
          if (state.direction === TOP_DIRECTION) {
            return state;
          }
          return {...state, direction: BOTTOM_DIRECTION}
        }
        case 'ArrowUp': {
          if (state.direction === BOTTOM_DIRECTION) {
            return state;
          }
          return {...state, direction: TOP_DIRECTION}
        }
        case 'ArrowLeft': {
          if (state.direction === RIGHT_DIRECTION) {
            return state;
          }
          return {...state, direction: LEFT_DIRECTION}
        }
        case 'ArrowRight': {
          if (state.direction === LEFT_DIRECTION) {
            return state;
          }
          return {...state, direction: RIGHT_DIRECTION}
        }
        default:
          return {...state};
      }
    }
    case CHECK_EAT: {
      const head = snakePos[snakePos.length - 1];
      const isEate = checkImposition(head, fruitPos);
      if (!isEate) {
        return state;
      }
      if(state.sound.eatSound.doIt) {
        state.sound.eatSound.sound.play();
      }
      const newFruitPos = generateFruitPos(fieldSize, itemSize, snakePos);
      const newScore = score + 1;
      return {
        ...state,
        snakePos: [prevTail, ...snakePos],
        fruitPos: newFruitPos,
        score: newScore,
        speed: addSpeed ? speed - 1 : speed,
        bestScore: newScore > bestScore ? newScore : bestScore,
      };
    }
    case NEW_GAME: {
      return {
        ...initState,
        bestResults,
        itemSize,
        addSpeed,
        bestScore,
        isFail: false,
      }
    }
    case CHANGE_SIZE:{
      console.log(action.itemSize)
      return {...state, itemSize: action.itemSize}
    }
    case TOGGLE_SPEED:{
      return {...state, addSpeed: !addSpeed}
    }
    default:
      return state;
  }
}

const setSizeAC = (itemSize) => {
  return {
    type: CHANGE_SIZE,
    itemSize
  }
}

const checkEatAC = () => {
  return {
    type: CHECK_EAT,
  }
}

const moveAC = () => {
  return {
    type: MOVE,
  }
}

const keyDownAC = (key) => {
  return {
    type: KEY_DOWN,
    key,
  }
}

const toggleSpeed = () => {
  return{
    type: TOGGLE_SPEED,
  }
}

const newGameAC = () => {
  return {
    type: NEW_GAME,
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
  checkEatAC,
  newGameAC,
  setSizeAC,
  toggleSpeed
}


