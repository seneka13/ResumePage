import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './contactlist.module.scss'

function ContactItem(props, { id, name, phone, address, imgSrc }) {
  return (
    <NavLink to={{
      pathname: `/portfolio/contact-list/${id}`,
      state: { contact: props },
    }}
    >
      <div className={style['contact-item']}>
        <img className={style.ava} src={imgSrc} alt="avatar" />
        <div className={style.name}>Name: {name}</div>
        <div className={style.phone}>Phone: {phone}</div>
        <div className={style.adr}>Address: {address}</div>
      </div>
    </NavLink>
  )
}

export default ContactItem
