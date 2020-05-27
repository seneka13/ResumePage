import React from 'react'
import Nav from '../Nav'
import Sidebar from '../Sidebar'
import PropTypes from 'prop-types'
import styles from './page.module.scss'

function PageWrapper({children}) {
return (
    <main className={styles.page}>
        <Sidebar />
        <header className={styles.content}>
        <Nav /> 
        {children} 
        </header>
    </main>
)
}

PageWrapper.propTypes = {
    children: PropTypes.node
}

export default PageWrapper