import React from 'react'
import shortid from 'shortid'
import style from './contactlist.module.scss'


function ContactForm({ saveData }) {
  const initialState = {
    id: '',
    photo: '',
    name: '',
    phone: '',
    address: '',
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_PHOTO':
        return {
          ...state,
          photo: action.photo,
        }
      case 'ADD_NAME':
        return {
          ...state,
          name: action.name,
        }
      case 'ADD_PHONE':
        return {
          ...state,
          phone: action.phone,
        }
      case 'ADD_ADR':
        return {
          ...state,
          address: action.address,
        }
      case 'CLEAR_FIELDS':
        return {
          ...state,
          photo: '',
          name: '',
          phone: '',
          address: '',
        }
      default:
        throw new Error()
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState)
  const { photo, name, phone, address } = state

  console.log(state)

  const createContact = () => {
    const newContact = {
      id: shortid.generate(),
      name,
      phone,
      address,
      imgSrc: photo,
    }

    saveData(newContact)
    dispatch({ type: 'CLEAR_FIELDS' })
  }

  return (
    <div className={style.form}>
      <form>
        <label>

          <input type="text" value={photo} onChange={(e) => dispatch({ type: 'ADD_PHOTO', photo: e.target.value })} placeholder="Photo" />
        </label>
        <label>

          <input type="text" value={name} onChange={(e) => dispatch({ type: 'ADD_NAME', name: e.target.value })} placeholder="Name" />
        </label>
        <label>

          <input type="text" value={phone} onChange={(e) => dispatch({ type: 'ADD_PHONE', phone: e.target.value })} placeholder="Phone" />
        </label>
        <label>

          <input type="text" value={address} onChange={(e) => dispatch({ type: 'ADD_ADR', address: e.target.value })} placeholder="Address" />
        </label>
      </form>
      <button type="button" className={style.formBtn} onClick={createContact}>Создать контакт</button>
    </div>
  )
}

export default ContactForm
