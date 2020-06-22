import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './contactlist.module.scss'

function ContactItem(props) {
  return (
    <NavLink to={{
      pathname: `/portfolio/contact-list/${props.id}`,
      state: { contact: props },
    }}
    >
      <div className={style['contact-item']}>
        <img className={style.ava} src={props.imgSrc} alt="avatar" />
        <div className={style.name}>Name: {props.name}</div>
        <div className={style.phone}>Phone: {props.phone}</div>
        <div className={style.adr}>Address: {props.address}</div>
      </div>
    </NavLink>
  )
}

export default ContactItem
