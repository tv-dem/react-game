import {combineReducers, createStore} from 'redux'
import keyDownReducer from "./reducers/keyDownReducer";
import setIntervalReducer from "./reducers/setIntervalReducer";
import colorsReducer from "./reducers/colorsReducer";
import openSettingsWindowReducer from "./reducers/openSettingsWindow";

const persistedState = localStorage.getItem('state')
  ? JSON.parse(localStorage.getItem('state'))
  : {}

console.log(persistedState)

const store = createStore(combineReducers({
  position: keyDownReducer,
  intervals: setIntervalReducer,
  colors: colorsReducer,
  window: openSettingsWindowReducer,
}), persistedState)

store.subscribe(()=>{
  localStorage.setItem('state', JSON.stringify(store.getState()))
})

export default store
