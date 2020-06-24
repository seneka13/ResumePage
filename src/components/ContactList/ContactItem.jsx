import React from 'react'
import { NavLink } from 'react-router-dom'
import { string, number, oneOfType } from 'prop-types'
import { Col } from 'react-bootstrap'
import style from './contactlist.module.scss'

function ContactItem(props) {
  console.log(props)
  return (
    <Col className="pr-5 pl-5 mb-5" xs={12} md={6} lg={4}>
      <NavLink to={{
        pathname: `/portfolio/contact-list/${props.id}`,
        state: { contact: props },
      }}
      >
        <div className={style['contact-item']}>
          <img className={style.ava} src={props.imgSrc} alt="avatar" />
          <div className={style.name}>{props.name}</div>
          <div className={style.phone}>{props.phone}</div>
          <div className={style.adr}>{props.address}</div>
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
