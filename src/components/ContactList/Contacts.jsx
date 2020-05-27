import React from 'react'
import ContactItem from './ContactItem'
import PageWapper from '../PageWrapper'
import style from './contactlist.module.scss'
import {Row} from 'react-bootstrap'



function Contacts (props) {
            return (
            <PageWapper>
                <div className={style.content}>
                <Row>
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
                </Row>
                </div>
            </PageWapper>
        )
}

export default Contacts
