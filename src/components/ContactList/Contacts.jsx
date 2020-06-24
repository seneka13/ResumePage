import React from 'react'
import PropTypes from 'prop-types'
import ContactItem from './ContactItem'


function Contacts({ contacts }) {
  return (
    <>
      {
                    contacts.map((contact) => (
                      <ContactItem
                        name={contact.name}
                        imgSrc={contact.imgSrc}
                        phone={contact.phone}
                        address={contact.address}
                        desc={contact.desc}
                        id={contact.id}
                        key={contact.id}
                      />
                    ))
                }
    </>
  )
}

Contacts.propTypes = {
  contacts: PropTypes.array,
}

export default Contacts
