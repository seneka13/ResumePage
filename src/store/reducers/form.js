const initialState = {
  contact: [
    {
      id: 'xfwew432f',
      name: 'Jessica Johns',
      phone: '+54326452637457',
      address: 'Bakers\'s St 456',
      imgSrc: 'https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      desc: 'Some description',
    },
    {
      id: 'fds8ds77',
      name: 'Harry Smith',
      phone: '+44738548777',
      address: 'Stanlie\'s St 456',
      imgSrc: 'https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      desc: 'Some description',
    },
    {
      id: 'fyiuy346dq',
      name: 'Debbie Markos',
      phone: '+44738548777',
      address: 'Stanlie\'s St 456',
      imgSrc: 'https://images.unsplash.com/photo-1521117660421-ce701ed42966?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      desc: 'Some description',
    },
  ],
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
