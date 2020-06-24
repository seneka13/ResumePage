const initialState = {
  contact: [
    {
      id: 'xfwew432f',
      name: 'Jessica Johns',
      phone: '1-294-488-8922 x629',
      address: '62281 Juana Court',
      imgSrc: 'https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      desc: 'Ut veniam deleniti ut occaecati totam ut. Deserunt culpa corrupti.',
    },
    {
      id: 'fds8ds77',
      name: 'Harry Smith',
      phone: '1-581-267-2168 x47846',
      address: '468 Kerluke Fields',
      imgSrc: 'https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      desc: 'Illo perspiciatis distinctio saepe voluptatem dolores aliquid cupiditate eum qui. Dolore enim velit sit consequatur harum ut alias iusto. Odio aut debitis enim voluptate molestiae. Officiis aut ut adipisci ullam. Totam sed libero quam tempore soluta beatae tenetur nostrum tenetur.',
    },
    {
      id: 'fyiuy346dq',
      name: 'Debbie Markos',
      phone: '105-735-4233',
      address: '3974 Lowe Bridge',
      imgSrc: 'https://images.unsplash.com/photo-1521117660421-ce701ed42966?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      desc: 'Quia autem inventore nulla. Blanditiis ea nulla maiores magnam facilis sunt. Et quisquam et est. Itaque fugiat aliquam unde est.',
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
