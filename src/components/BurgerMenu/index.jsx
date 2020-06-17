import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './burger.module.scss'
import Sidebar from '../Sidebar'
import { toggleMenu } from '../../store/action'
import BurgerBtn from './BurgerBtn'

function BurgerMenu({ status, toggle }) {
  const burgerRef = React.useRef(null)

  const handleClick = (e) => {
    if (burgerRef.current.contains(e.target)) {
      return
    }
    toggle(false)
  }

  React.useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const toggleClass = status ? styles.burgerActive : styles.burgerMenu
  return (
    <div ref={burgerRef} className={toggleClass}>
      <BurgerBtn />
      <Sidebar />
    </div>
  )
}

BurgerBtn.propTypes = {
  status: PropTypes.bool,
  toggle: PropTypes.func,
}


const mapStateToProps = (state) => ({
  status: state.toggle.status,
})

const MapDispatchToProps = (dispatch) => ({
  toggle: (status) => dispatch(toggleMenu(status)),
})

export default connect(mapStateToProps, MapDispatchToProps)(BurgerMenu)
