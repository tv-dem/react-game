const MOVE_SETINTERVAL = 'MOVE_SETINTERVAL';
const MOVE_CLEARINTERVAL = 'MOVE_CLEARINTERVAL'

const initialState = {
  interval: null,
  time: 0,
}

const setIntervalReducer = (state = initialState, action) => {
  const {callbacks, time} = action;
  switch(action.type) {
    case MOVE_SETINTERVAL:
      const i = setInterval(() => {
        callbacks.forEach(foo => {
          foo();
        })
      }, time);
      return {...state, time, interval: i};
    case MOVE_CLEARINTERVAL:
      clearInterval(state.interval);
      return {...state, interval: null};
    default:
      return state;
  }
}

const moveSetIntervalAC = (callbacks, time) => {
  return{
    type: MOVE_SETINTERVAL,
    callbacks,
    time,
  }
}
const moveClearIntervalAC = () => {
  return{
    type: MOVE_CLEARINTERVAL,
  }
}

export default setIntervalReducer;

export {
  moveClearIntervalAC,
  moveSetIntervalAC,
}
