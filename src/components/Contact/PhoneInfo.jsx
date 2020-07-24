/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import { Col } from 'react-bootstrap'
import PhoneIcon from '../Icons/PhoneIcon'
import Telegram from '../Icons/Telegram'
import Whatsapp from '../Icons/Whatsapp'
import style from './contact.module.scss'


function PhoneInfo() {
  return (
    <Col xs={12} md={12} lg={4} className="d-flex justify-content-center mb-4">
      <div className={style.contactCard}>
        <div className={style.contactCircle}>
          <PhoneIcon className={style.icon} />
        </div>
        <div className={style.contactContent}>
          <a href="tel:+996773972279">Моб: +996 (773) 97-22-79</a> <br />
          <a href="tel:+996312407310">Тел: +996 (312) 62-05-35 (+181)</a> <br />
        </div>
        <div className={style.contactIcons}>
          <a href="https://telegram.im/@seneka13" target="_blank" rel="noreferrer noopener"><Telegram className={style.contactIcon} /></a>
          <a href="https://wa.me/996773972279" target="_blank" rel="noreferrer noopener"><Whatsapp className={style.contactIcon} /></a>
        </div>
      </div>
    </Col>
  )
}

export default PhoneInfo
