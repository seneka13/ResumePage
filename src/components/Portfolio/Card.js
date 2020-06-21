import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Card, Col } from 'react-bootstrap'
import placeholder from '../../img/placeholder.png'
import styles from './portfolio.module.scss'


function portCard({ link, image = placeholder, alt = '', title, desc }) {
  return (
    <Col xs={12} md={4} className="mb-4">
      <Card className={styles.card}>
        <Card.Img src={image} alt={alt} />
        <Card.Body className={styles.cardBody}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {desc}
          </Card.Text>
          <NavLink to={link}>
            <button type="button" className={styles.cardBtn}>Посмотреть проект</button>
          </NavLink>
        </Card.Body>
      </Card>
    </Col>
  )
}

portCard.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default portCard
