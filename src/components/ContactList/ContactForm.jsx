import React from 'react'
import shortid from 'shortid'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addContact } from '../../store/action'
import styles from './contactlist.module.scss'


function ContactForm({ form, contact }) {
  const initialState = {
    id: '',
    photo: '',
    name: '',
    phone: '',
    address: '',
    desc: '',
    err: '',
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
          err: '',
        }
      case 'FORM_ERR':
        return {
          ...state,
          err: 'Заполните форму!*',
        }
      default:
        throw new Error()
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState)
  const { photo, name, phone, address, desc, err } = state

  const createContact = () => {
    const newContact = {
      id: shortid.generate(),
      name,
      phone,
      address,
      desc,
      imgSrc: photo,
    }

    if (!name && !phone && !address) {
      dispatch({ type: 'FORM_ERR' })
      return
    }

    console.log(desc)


    form([...contact, newContact])
    dispatch({ type: 'CLEAR_FIELDS' })
  }

  return (
    <Form className={styles.form}>
      <Form.Group className={styles.formGroup} controlId="URL фото">
        <Form.Label />
        <Form.Control value={photo} onChange={(e) => dispatch({ type: 'ADD_CONTACT', field: 'photo', fieldValue: e.target.value })} type="text" placeholder="Ссылка на фото" />
      </Form.Group>
      <Form.Group className={styles.formGroup} controlId="Name">
        <Form.Label />
        <Form.Control value={name} onChange={(e) => dispatch({ type: 'ADD_CONTACT', field: 'name', fieldValue: e.target.value })} type="text" placeholder="Имя*" />
      </Form.Group>
      <Form.Group className={styles.formGroup} controlId="Phone">
        <Form.Label />
        <Form.Control value={phone} onChange={(e) => dispatch({ type: 'ADD_CONTACT', field: 'phone', fieldValue: e.target.value })} type="text" placeholder="Телефон*" />
      </Form.Group>
      <Form.Group className={styles.formGroup} controlId="Address">
        <Form.Label />
        <Form.Control value={address} onChange={(e) => dispatch({ type: 'ADD_CONTACT', field: 'address', fieldValue: e.target.value })} type="text" placeholder="Адресс*" />
      </Form.Group>
      <Form.Group className={styles.formGroup} controlId="Description">
        <Form.Label />
        <Form.Control as="textarea" rows="3" onChange={(e) => dispatch({ type: 'ADD_CONTACT', field: 'desc', fieldValue: e.target.value })} type="text" placeholder="Описание" />
      </Form.Group>
      <div className={styles.error}>{err}</div>
      <button type="button" className={styles.formBtn} onClick={createContact}>Создать контакт</button>
    </Form>
  )
}

ContactForm.propTypes = {
  form: PropTypes.func,
  contact: PropTypes.array,
}


const MapStateToProps = (state) => ({
  contact: state.form.contact,
})


const MapDispatchToProps = (dispatch) => ({
  form: (contact) => dispatch(addContact(contact)),
})


export default connect(MapStateToProps, MapDispatchToProps)(ContactForm)
