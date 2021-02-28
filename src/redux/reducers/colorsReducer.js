import {getRandomInt} from "./utils";

const CHANGE_SNAKE_COLOR = 'CHANGE_SNAKE_COLOR';
const CHANGE_FRUIT_COLOR = 'CHANGE_FRUIT_COLOR';
const SET_RANDOM_COLORS = 'SET_RANDOM_COLORS';

const initState = {
  snakeColor: 'cornflowerblue',
  fruitColor: 'aquamarine',
  colors: [
    'cornflowerblue',
    'aquamarine',
    '#fff',
    '#555',
    '#e23fff',
    '#005cff'
  ]
}

const colorsReducer = (state = initState, action) => {
  switch(action.type){
    case CHANGE_SNAKE_COLOR:
      return {...state, snakeColor: action.color}
    case CHANGE_FRUIT_COLOR:
      return {...state, fruitColor: action.color}
    case SET_RANDOM_COLORS:
      if(action.event.code !== 'Tab') {
        return state
      }
      const {colors} = state;
      action.event.preventDefault()
      return {
        ...state,
        fruitColor: colors[getRandomInt(colors.length - 1)],
        snakeColor: colors[getRandomInt(colors.length - 1)],
      }
    default:
      return state;
  }
}

const setFruitColorAC = (color) => {
  return {
    type: CHANGE_FRUIT_COLOR,
    color,
  }
}

const setRandomColorAC = (event) => {
  return{
    type: SET_RANDOM_COLORS,
    event,
  }
}


const setSnakeColorAC = (color) => {
  return {
    type: CHANGE_SNAKE_COLOR,
    color,
  }
}

export default colorsReducer;

export {
  setSnakeColorAC,
  setFruitColorAC,
  setRandomColorAC,
}
