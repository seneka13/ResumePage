import React from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { array } from 'prop-types'
import ContactForm from './ContactForm'
import Contacts from './Contacts'
import PageWrapper from '../PageWrapper'
import style from './contactlist.module.scss'

function ContactList({ contact }) {
  return (
    <PageWrapper>
      <Container>
        <div className={style.content}>
          <ContactForm />
          <Contacts contacts={contact} />
        </div>
      </Container>
    </PageWrapper>
  )
}

ContactList.propTypes = {
  contact: array,
}

const MapStateToProps = (state) => ({
  contact: state.form.contact,
})

export default connect(MapStateToProps)(ContactList)
