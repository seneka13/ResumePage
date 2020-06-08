import React from 'react'
import PropTypes from 'prop-types'
import ContactItem from './ContactItem'


function Contacts({ contacts }) {
  return (
    <div>
      {
                    contacts.map((contact) => (
                      <ContactItem
                        name={contact.name}
                        imgSrc={contact.imgSrc}
                        phone={contact.phone}
                        address={contact.address}
                        id={contact.id}
                        key={contact.id}
                      />
                    ))
                }
    </div>
  )
}

Contacts.propTypes = {
  contacts: PropTypes.node,
}

export default Contacts
