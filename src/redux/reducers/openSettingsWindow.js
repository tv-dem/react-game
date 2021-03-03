const TOGGLE_SETTINGS_WINDOW = 'TOGGLE_SETTINGS_WINDOW';
const TOGGLE_MODAL_WINDOW = 'TOGGLE_MODAL_WINDOW';
const TOGGLE_RESULTS_WINDOW = 'TOGGLE_RESULTS_WINDOW'

const initState = {
  isSettingsWindow: false,
  isModalWindow: true,
  isBestResultsWindow: false,
}

const openSettingsWindowReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_SETTINGS_WINDOW:
      return {...state, isSettingsWindow: !state.isSettingsWindow}
    case TOGGLE_MODAL_WINDOW:
      return {...state, isModalWindow: !state.isModalWindow}
    case TOGGLE_RESULTS_WINDOW:
      return {...state, isBestResultsWindow: !state.isBestResultsWindow}
    default:
      return state;
  }
}

const toggleResultsWindowAC = () => {
  return{
    type: TOGGLE_RESULTS_WINDOW,
  }
}

const toggleModalWindowAC = () => {
  return{
    type: TOGGLE_MODAL_WINDOW,
  }
}

const toggleSettingsWindowAC = () => {
  return{
    type: TOGGLE_SETTINGS_WINDOW,
  }
}

export {
  toggleSettingsWindowAC,
  toggleModalWindowAC,
  toggleResultsWindowAC,
}
export default openSettingsWindowReducer;
