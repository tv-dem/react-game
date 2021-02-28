import {combineReducers, createStore} from 'redux'
import keyDownReducer from "./reducers/keyDownReducer";
import setIntervalReducer from "./reducers/setIntervalReducer";
import colorsReducer from "./reducers/colorsReducer";
import openSettingsWindowReducer from "./reducers/openSettingsWindow";

const store = createStore(combineReducers({
  position: keyDownReducer,
  intervals: setIntervalReducer,
  colors: colorsReducer,
  window: openSettingsWindowReducer,
}))

export default store
