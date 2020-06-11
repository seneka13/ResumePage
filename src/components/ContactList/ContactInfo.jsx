import React from 'react'
import PropTypes from 'prop-types'
import style from './contactlist.module.scss'

import PageWapper from '../PageWrapper'

function ContactInfo(props) {
  const { imgSrc, name, phone, address, desc } = props.location.state.contact
  return (
    <PageWapper>
      <div className={style.contactInfo}>
        <img className={style.contactImg} src={imgSrc} alt="contact" />
        <div className={style.contactAbout}>
          <div>{name}</div>
          <div>{phone}</div>
          <div>{address}</div>
          <div className={style.contactText}>
            {desc}
          </div>
        </div>
      </div>
    </PageWapper>
  )
}

ContactInfo.propTypes = {
  contact: PropTypes.object,
  name: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string,
  imgSrc: PropTypes.string,
  desc: PropTypes.string,
}

export default ContactInfo
