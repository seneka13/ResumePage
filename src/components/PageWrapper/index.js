import React from 'react'
import Nav from '../Nav'
import Sidebar from '../Sidebar'
import styles from './page.module.scss'

function PageWrapper({ children }) {
return (
    <div className={styles.page}>
        <Sidebar />
        <div className={styles.content}>
        <Nav />
        {children}
    </div>
    </div>
)
}

export default PageWrapper