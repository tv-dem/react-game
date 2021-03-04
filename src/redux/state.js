import {combineReducers, createStore} from 'redux'
import mainReducer from "./reducers/mainReducer";
import setIntervalReducer from "./reducers/setIntervalReducer";
import colorsReducer from "./reducers/colorsReducer";
import openSettingsWindowReducer from "./reducers/windowReducer";

const persistedState = localStorage.getItem('state')
  ? JSON.parse(localStorage.getItem('state'))
  : {}


const store = createStore(combineReducers({
  position: mainReducer,
  intervals: setIntervalReducer,
  colors: colorsReducer,
  window: openSettingsWindowReducer,
}), persistedState)

store.subscribe(()=>{
  localStorage.setItem('state', JSON.stringify(store.getState()))
})

export default store
