import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import placeholder from '../../img/placeholder.png'
import styles from './portfolio.module.scss'


function Card({ link, image = placeholder, alt = '', title, desc, onImageClick }) {
return (
    <NavLink to={link} className={styles.card}>
    <img src={image} alt={alt} onClick={onImageClick}/>
    <div className={styles.cardText}>
        <h3>{title}</h3>
        <div>{desc}</div>
    </div>
    </NavLink>
)
}

Card.propTypes = {
link: PropTypes.string.isRequired,
image: PropTypes.string,
alt: PropTypes.string,
title: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
desc: PropTypes.string.isRequired,
onImageClick: PropTypes.func,
}

export default Card