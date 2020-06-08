import React from 'react'
import PropTypes from 'prop-types'
import style from './contactlist.module.scss'

import PageWapper from '../PageWrapper'

function ContactInfo({ props }) {
  const { name, phone, address, imgSrc} = props.location.state.contact
  return (
    <PageWapper>
      <div className={style.contactInfo}>
        <img className={style.contactImg} src={imgSrc} alt="contact" />
        <div className={style.contactAbout}>
          <div>{name}</div>
          <div>{phone}</div>
          <div>{address}</div>
          <div className={style.contactText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ut sapiente qui adipisci tempore, neque numquam vitae natus facere reiciendis officiis earum provident praesentium veniam facilis illo dicta saepe in!Nemo excepturi temporibus, velit possimus, ducimus fugiat debitis nihil, pariatur suscipit dignissimos explicabo. Corporis asperiores, numquam porro eaque, ratione veniam ad fugit repellendus voluptas, architecto nesciunt velit consequatur ex nihil?
          </div>
        </div>
      </div>
    </PageWapper>
  )
}

ContactInfo.propTypes = {
  contact: PropTypes.node,
  name: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string,
  imgSrc: PropTypes.string,
}

export default ContactInfo
