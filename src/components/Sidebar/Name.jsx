import React from 'react'
import styles from './sidebar.module.scss'


function Name() {
  return (
    <div className={styles.name}>
      <span className={styles.upper}>С</span>амат
      <span className={styles.upper}> М</span>усаев
    </div>
  )
}

export default Name
