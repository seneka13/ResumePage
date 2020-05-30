import React from 'react'
import ContactItem from './ContactItem'



function Contacts (props) {
            return (
                <div>
                {
                    props.contacts.map((contact) => (
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

export default Contacts