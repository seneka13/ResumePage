import React from 'react'
import styles from './sidebar.module.scss'


function Name() {
  return (
    <div className={styles.name}>
      <span className={styles.upper}>S</span>amat
      <span className={styles.upper}> M</span>usaev
    </div>
  )
}

export default Name
