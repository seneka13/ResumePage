import React from 'react'
import Burger from 'react-css-burger'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from './burger.module.scss'
import { toggleMenu } from '../../store/action'

function BurgerBtn({ status, toggle }) {
  const window = document.body

  window.addEventListener('dblclick', () => {
    toggle(false)
  })

  return (
    <div className={styles.burgerBtn}>
      <Burger
        onClick={() => toggle(!status)}
        active={status}
        burger="arrow"
        color="#dc9624"
        hoverOpacity={0.6}
        scale={0.6}
        style={{ outline: 'none' }}
      />
    </div>
  )
}

BurgerBtn.propTypes = {
  status: PropTypes.bool,
  toggle: PropTypes.func,
}


const MapStateToProps = (state) => ({
  status: state.toggle.status,
})

const MapDispatchToProps = (dispatch) => ({
  toggle: (status) => dispatch(toggleMenu(status)),
})


export default connect(MapStateToProps, MapDispatchToProps)(BurgerBtn)
