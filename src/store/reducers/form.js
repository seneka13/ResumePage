const initialState = {
  contact: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contact: action.contact,
      }
    default:
      return state
  }
}

export default reducer
