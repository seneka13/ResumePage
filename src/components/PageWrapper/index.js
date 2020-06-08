import React from 'react'
import PropTypes from 'prop-types'
import BurgerMenu from '../BurgerMenu'
import styles from './page.module.scss'

function PageWrapper({ children }) {
  return (
    <main className={styles.page}>
      <BurgerMenu />
      <div className={styles.content}>
        {children}
      </div>
    </main>
  )
}

PageWrapper.propTypes = {
  children: PropTypes.node,
}

export default PageWrapper
