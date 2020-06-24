import React from 'react'
import { Container, Row, Modal } from 'react-bootstrap'

import { connect } from 'react-redux'
import { array } from 'prop-types'
import PlusIcon from '../Icons/PlusIcon'
import ContactForm from './ContactForm'
import Contacts from './Contacts'
import PageWrapper from '../PageWrapper'
import styles from './contactlist.module.scss'


function ContactList({ contact }) {
  const [show, setShow] = React.useState(false)

  const handleClick = () => setShow(!show)

  return (
    <PageWrapper>
      <Container>
        <button className={styles.addBtn} type="button" onClick={handleClick}><PlusIcon className={styles.icon} /></button>
        <Modal className={styles.formModal} show={show} onHide={handleClick}>
          <ContactForm />
        </Modal>
        <Row className="pt-5 pb-5">
          <Contacts contacts={contact} />
        </Row>
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
