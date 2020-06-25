import React from 'react'
import { NavLink } from 'react-router-dom'
import { string, number, oneOfType } from 'prop-types'
import { Col } from 'react-bootstrap'
import style from './contactlist.module.scss'
import placeholder from '../../img/porplaceholder.jpg'

function ContactItem({ imgSrc = placeholder, name, phone, address, id, desc }) {
  return (
    <Col className="pr-5 pl-5 mb-5" xs={12} md={6} lg={4}>
      <NavLink to={{
        pathname: `/portfolio/contact-list/${id}`,
        state: { contact: { imgSrc, name, phone, address, id, desc } },
      }}
      >
        <div className={style['contact-item']}>
          <img className={style.ava} src={imgSrc} alt="avatar" />
          <div className={style.name}>{name}</div>
          <div className={style.phone}>{phone}</div>
          <div className={style.adr}>{address}</div>
        </div>
      </NavLink>
    </Col>
  )
}

ContactItem.propTypes = {
  name: string.isRequired,
  phone: oneOfType([string, number]).isRequired,
  address: oneOfType([string, number]).isRequired,
  imgSrc: string,
  id: string,
}

export default ContactItem
