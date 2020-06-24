import React from 'react'
import PropTypes from 'prop-types'
import { Container, Col, Row } from 'react-bootstrap'
import SocialIcons from '../Sidebar/SocialIcons'

import style from './contactlist.module.scss'

import PageWapper from '../PageWrapper'

function ContactInfo(props) {
  console.log(props)
  const { imgSrc, name, phone, address, desc } = props.location.state.contact
  return (
    <PageWapper>
      <Container>
        <Row>
          <Col className="pt-5 d-flex justify-content-center" xs={12} md={6}>
            <img className={style.contactImg} src={imgSrc} alt="contact" />
          </Col>
          <Col className="pt-5" xs={12} md={6}>
            <div className={style.contactAbout}>
              <div className={style.contactName}>Имя: {name}</div>
              <div>Телефон: {phone}</div>
              <div>Адресс: {address}</div>
              <div className={style.contactDesc}>
                {desc}
              </div>
              <div className={style.contactSocial}>
                <SocialIcons />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
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
