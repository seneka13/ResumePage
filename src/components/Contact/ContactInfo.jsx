import React from 'react'
import { Row } from 'react-bootstrap'
import AdressInfo from './AdressInfo'
import PhoneInfo from './PhoneInfo'
import MailInfo from './MailInfo'


function ContactInfo() {
  return (
    <Row className="pt-5 pb-5">
      <AdressInfo />
      <PhoneInfo />
      <MailInfo />
    </Row>
  )
}

export default ContactInfo
