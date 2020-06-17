import React from 'react'
import { Col } from 'react-bootstrap'
import MailIcon from '../Icons/MailIcon'
import Facebook from '../Icons/Facebook'
import Linkedin from '../Icons/Linkedin'
import style from './contact.module.scss'


function MailInfo() {
  return (
    <Col xs={12} md={12} lg={4} className="d-flex justify-content-center mb-4">
      <div className={style.contactCard}>
        <div className={style.contactCircle}>
          <MailIcon className={style.icon} />
        </div>
        <div className={style.contactContent}>
          <a href="https://gmail.com">E-mail: samkazus130293@gmail.com</a> <br/>
          <a href="https://mail.ru">E-mail: sam_mos13@mail.ru</a>
        </div>
        <div className={style.contactIcons}>
          <a href="https://sam_mos13@mail.ru" target="_blank" rel="noreferrer noopener"><Facebook className={style.contactIcon} /></a>
          <a href="https://telegram.im/@seneka13" target="_blank" rel="noreferrer noopener"><Linkedin className={style.contactIcon} /></a>
        </div>
      </div>
    </Col>
  )
}

export default MailInfo
