import {combineReducers, createStore} from 'redux'
import keyDownReducer from "./reducers/keyDownReducer";
import setIntervalReducer from "./reducers/setIntervalReducer";

const store = createStore(combineReducers({
  position: keyDownReducer,
  intervals: setIntervalReducer,
}))

export default store
