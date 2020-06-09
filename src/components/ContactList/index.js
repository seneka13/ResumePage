import React, { useState } from 'react'
import shortid from 'shortid'
import { Container } from 'react-bootstrap'
import ContactForm from './ContactForm'
import Contacts from './Contacts'
import PageWrapper from '../PageWrapper'
import style from './contactlist.module.scss'

function ContactList() {
  const contactsArray = [
    {
      id: shortid.generate(),
      name: 'Jessica Johns',
      phone: '+54326452637457',
      address: 'Bakers\'s St 456',
      imgSrc: 'https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      desc: 'Some description',
    },
    {
      id: shortid.generate(),
      name: 'Harry Smith',
      phone: '+44738548777',
      address: 'Stanlie\'s St 456',
      imgSrc: 'https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      desc: 'Some description',
    },
    {
      id: shortid.generate(),
      name: 'Debbie Markos',
      phone: '+44738548777',
      address: 'Stanlie\'s St 456',
      imgSrc: 'https://images.unsplash.com/photo-1521117660421-ce701ed42966?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      desc: 'Some description',
    },
  ]

  const localContact = JSON.parse(window.localStorage.getItem('cont'))
  const [contact, setContact] = useState(localContact || contactsArray)
  const handleSave = (data) => {
    setContact([...contact, data])
    window.localStorage.setItem('cont', JSON.stringify([...contact, data]))
  }

  return (
    <PageWrapper>
      <Container>
        <div className={style.content}>
          <ContactForm saveData={handleSave} />
          <Contacts contacts={contact} />
        </div>
      </Container>
    </PageWrapper>
  )
}

export default ContactList
