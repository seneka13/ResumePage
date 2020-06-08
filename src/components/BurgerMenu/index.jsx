import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './burger.module.scss'
import Sidebar from '../Sidebar'
import BurgerBtn from './BurgerBtn'

function BurgerMenu({ status }) {
  const toggleClass = status ? styles.burgerActive : styles.burgerMenu
  return (
    <div className={toggleClass}>
      <BurgerBtn />
      <Sidebar />
    </div>
  )
}

BurgerMenu.propTypes = {
  status: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  status: state.status,
})

export default connect(mapStateToProps)(BurgerMenu)
