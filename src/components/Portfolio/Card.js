import React from 'react'
import { string } from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import placeholder from '../../img/placeholder.png'
import styles from './portfolio.module.scss'


function portCard({ link, image = placeholder, alt = '', title, desc }) {
  return (
    <Col xs={12} md={6} lg={4} className="mb-4">
      <div className={styles.card}>
        <img src={image} alt={alt} />
        <div className={styles.cardBody}>
          <h4>{title}</h4>
          <p>{desc}</p>
          <NavLink to={link}>
            <button type="button" className={styles.cardBtn}>Посмотреть</button>
          </NavLink>
        </div>
      </div>
    </Col>
  )
}

portCard.propTypes = {
  link: string,
  image: string,
  alt: string,
  title: string,
  desc: string,
}

export default portCard
