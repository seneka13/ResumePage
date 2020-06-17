import React from 'react'
import { Col } from 'react-bootstrap'
import AddressIcon from '../Icons/AddressIcon'
import MapsIcon from '../Icons/MapsIcon'
import style from './contact.module.scss'


function AdressInfo() {
  return (
    <Col xs={12} md={12} lg={4} className="d-flex justify-content-center mb-4">
      <div className={style.contactCard}>
        <div className={style.contactCircle}>
          <AddressIcon className={style.icon} />
        </div>
        <div className={style.contactContent}>Страна: Кыргызстан <br /> Город: Бишкек <br /> Район: Асанбай 13-18</div>
        <div className={style.contactIcons}>
          <a href="https://sam_mos13@mail.ru" target="_blank" rel="noreferrer noopener"><MapsIcon className={style.contactIcon} /></a>
        </div>
      </div>
    </Col>
  )
}

export default AdressInfo
