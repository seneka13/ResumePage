import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'react-bootstrap'
import ContactItem from './ContactItem'


function Contacts({ contacts }) {
  return (
    <Row>
      {
                    contacts.map((contact) => (
                      <Col xs={12} md={4} key={contact.id}>
                        <ContactItem
                          name={contact.name}
                          imgSrc={contact.imgSrc}
                          phone={contact.phone}
                          address={contact.address}
                          desc={contact.desc}
                          id={contact.id}
                        />
                      </Col>
                    ))
                }
    </Row>
  )
}

Contacts.propTypes = {
  contacts: PropTypes.array,
}

export default Contacts
