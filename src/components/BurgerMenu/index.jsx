import React from 'react'
import { connect } from 'react-redux'
import { bool, func } from 'prop-types'
import styles from './burger.module.scss'
import Sidebar from '../Sidebar'
import { toggleMenu } from '../../store/action'
import BurgerBtn from './BurgerBtn'

function BurgerMenu({ status, toggle }) {
  const burgerRef = React.useRef(null)

  React.useEffect(() => {
    const handleClick = (e) => {
      if (burgerRef.current.contains(e.target)) {
        return
      }
      toggle(false)
    }
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [toggle])

  const toggleClass = status ? styles.burgerActive : styles.burgerMenu
  return (
    <div ref={burgerRef} className={toggleClass}>
      <BurgerBtn />
      <Sidebar />
    </div>
  )
}

BurgerMenu.propTypes = {
  status: bool,
  toggle: func,
}


const mapStateToProps = (state) => ({
  status: state.toggle.status,
})

const MapDispatchToProps = (dispatch) => ({
  toggle: (status) => dispatch(toggleMenu(status)),
})

export default connect(mapStateToProps, MapDispatchToProps)(BurgerMenu)
