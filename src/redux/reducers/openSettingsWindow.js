const TOGGLE_SETTINGS_WINDOW = 'TOGGLE_SETTINGS_WINDOW';
const TOGGLE_MODAL_WINDOW = 'TOGGLE_MODAL_WINDOW';

const initState = {
  isSettingsWindow: false,
  isModalWindow: true,
}

const openSettingsWindowReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_SETTINGS_WINDOW:
      return {...state, isSettingsWindow: !state.isSettingsWindow}
    case TOGGLE_MODAL_WINDOW:
      return {...state, isModalWindow: !state.isModalWindow}
    default:
      return state;
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
  toggleModalWindowAC
}
export default openSettingsWindowReducer;
