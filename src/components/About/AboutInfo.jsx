import React from 'react'
import { Row, Col } from 'react-bootstrap'
import portrait from '../../img/portrait.jpg'
import styles from './about.module.scss'


function AboutInfo() {
  return (
    <div className={`${styles.aboutInfo} mb-5 mt-5`}>
      <Row>
        <Col xs={12} md={6}>
          <img src={portrait} alt="portrait" />
        </Col>
        <Col xs={12} md={6}>
          <h3>Hello! i am Samat</h3>
        </Col>
      </Row>
    </div>
  )
}

export default AboutInfo
