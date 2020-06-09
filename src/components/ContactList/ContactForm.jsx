import React from 'react'
import shortid from 'shortid'
import PropTypes from 'prop-types'
import style from './contactlist.module.scss'


function ContactForm({ saveData }) {
  const initialState = {
    id: '',
    photo: '',
    name: '',
    phone: '',
    address: '',
    desc: '',
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_CONTACT':
        return {
          ...state,
          [action.field]: action.fieldValue,
        }
      case 'CLEAR_FIELDS':
        return {
          ...state,
          photo: '',
          name: '',
          phone: '',
          address: '',
          desc: '',
        }
      default:
        throw new Error()
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState)
  const { photo, name, phone, address, desc } = state


  const createContact = () => {
    const newContact = {
      id: shortid.generate(),
      name,
      phone,
      address,
      desc,
      imgSrc: photo,
    }

    saveData(newContact)
    dispatch({ type: 'CLEAR_FIELDS' })
  }

  return (
    <div className={style.form}>
      <form>
        <label>

          <input type="text" value={photo} onChange={(e) => dispatch({ type: 'ADD_CONTACT', field: 'photo', fieldValue: e.target.value })} placeholder="Photo" />
        </label>
        <label>

          <input type="text" value={name} onChange={(e) => dispatch({ type: 'ADD_CONTACT', field: 'name', fieldValue: e.target.value })} placeholder="Name" />
        </label>
        <label>

          <input type="text" value={phone} onChange={(e) => dispatch({ type: 'ADD_CONTACT', field: 'phone', fieldValue: e.target.value })} placeholder="Phone" />
        </label>
        <label>

          <input type="text" value={address} onChange={(e) => dispatch({ type: 'ADD_CONTACT', field: 'address', fieldValue: e.target.value })} placeholder="Address" />
        </label>
        <textarea name="desc" id="desc" cols="21" rows="5" onChange={(e) => dispatch({ type: 'ADD_CONTACT', field: 'desc', fieldValue: e.target.value })} placeholder="Description"></textarea>
      </form>
      <button type="button" className={style.formBtn} onClick={createContact}>Создать контакт</button>
    </div>
  )
}

ContactForm.propTypes = {
  saveData: PropTypes.func,
}


export default ContactForm
