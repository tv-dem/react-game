import {
  generateFruitPos,
  generateNewHead,
  checkImposition, RIGHT_DIRECTION, TOP_DIRECTION, BOTTOM_DIRECTION, LEFT_DIRECTION,

} from './utils'
import eatSound from '../../assets/eat.mp3'
import music from '../../assets/music.mp3'

const audio = new Audio(music);

const CHANGE_DIRECTION = 'CHANGE_DIRECTION';
const MOVE = 'MOVE';
const CHECK_BOOM = 'CHECK_BOOM';
const CHECK_EAT = 'CHECK_EAT';
const NEW_GAME = 'NEW_GAME';
const CHANGE_SIZE = 'CHANGE_SIZE'
const TOGGLE_SPEED = 'TOGGLE_SPEED'
const TOGGLE_EFFECTS = 'TOGGLE_EFFECTS'
const TOGGLE_MUSIC = 'TOGGLE_MUSIC';
const PLAY_MUSIC = 'PLAY_MUSIC';

const initState = {
  bestResults: [],
  sound: {
    effects: true,
    music: true,
    url: music,
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


const mainReducer = (state = initState, action) => {
  const {direction, fieldSize, itemSize, snakePos, fruitPos, prevTail, score, bestScore, speed, addSpeed, bestResults, sound} =  state;
  switch (action.type) {
    case CHECK_BOOM: {
      const head = snakePos[snakePos.length - 1];
      const isFail = snakePos.findIndex((point, i) => {
        return checkImposition(head, point) && i !== snakePos.length - 1;
      })
      if(isFail === -1) {
        return state
      }
      const newBR = [...bestResults, {score, time: createDate(new Date())}].sort((a, b) => a.score < b.score ? 1 : -1);
      return {
        ...state,
        isFail: isFail !== -1,
        score: 0,
        bestResults: newBR.slice(0, 10),
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
    case CHANGE_DIRECTION: {
      switch (true) {
        case action.key === 'ArrowDown' || action.key === 'KeyS': {
          if (direction === TOP_DIRECTION || direction === BOTTOM_DIRECTION) {
            return state;
          }
          return {...state, direction: BOTTOM_DIRECTION}
        }
        case action.key === 'ArrowUp' || action.key === 'KeyW': {
          if (direction === BOTTOM_DIRECTION || direction === TOP_DIRECTION) {
            return state;
          }
          return {...state, direction: TOP_DIRECTION}
        }
        case action.key === 'ArrowLeft' || action.key === 'KeyA': {
          if (direction === RIGHT_DIRECTION || direction === LEFT_DIRECTION) {
            return state;
          }
          return {...state, direction: LEFT_DIRECTION}
        }
        case action.key === 'ArrowRight' || action.key === 'KeyD': {
          if (state.direction === LEFT_DIRECTION || direction === RIGHT_DIRECTION) {
            return state;
          }
          return {...state, direction: RIGHT_DIRECTION}
        }
        default:
          return state;
      }
    }
    case CHECK_EAT: {
      const head = snakePos[snakePos.length - 1];
      const isEate = checkImposition(head, fruitPos);
      if (!isEate) {
        return state;
      }
      if(state.sound.effects) {
        new Audio(eatSound).play()
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
      if(sound.music){
        new Audio(music)
      }
      return {
        ...initState,
        bestResults,
        itemSize,
        isFail: false,
        sound,
        addSpeed,
        bestScore,
      }
    }
    case CHANGE_SIZE:{
      return {...state, itemSize: action.itemSize}
    }
    case TOGGLE_SPEED:{
      return {...state, addSpeed: !addSpeed}
    }
    case TOGGLE_EFFECTS: {
      return {...state, sound: {...sound, effects: !sound.effects}}
    }
    case TOGGLE_MUSIC:
      if(!sound.music){
        audio.play()
      }
      if(sound.music){
        audio.pause();
      }
      return {...state, sound: {...sound, music: !sound.music}}
    case PLAY_MUSIC:
      return {...state, sound: {...sound, music: false}};
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

const toggleMusicAC = () => {
  return {
    type: TOGGLE_MUSIC,
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
    type: CHANGE_DIRECTION,
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

const toggleEffectsAC = () => {
  return{
    type: TOGGLE_EFFECTS,
  }
}

const playMusicAC = () => {
  return {
    type: PLAY_MUSIC,
  }
}

const checkBoomAC = () => {
  return {
    type: CHECK_BOOM,
  }
}
export default mainReducer;

export {
  keyDownAC,
  moveAC,
  checkBoomAC,
  checkEatAC,
  newGameAC,
  setSizeAC,
  toggleSpeed,
  toggleEffectsAC,
  toggleMusicAC,
  playMusicAC,
}


