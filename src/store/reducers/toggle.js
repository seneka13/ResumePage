const initialState = {
  status: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        status: action.status,
      }
    default:
      return state
  }
}

export default reducer
