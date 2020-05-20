import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from "./nav.module.scss"


function Nav() {

    return (
        <header className={styles["header"]}>
            <NavLink activeClassName ={styles['active-link']} exact to="/">About</NavLink>
            <NavLink activeClassName ={styles['active-link']} to="/contact">Contact</NavLink>
            <NavLink activeClassName ={styles['active-link']} to="/portfolio">Portfolio</NavLink>
            <NavLink activeClassName ={styles['active-link']} to="/resume">Resume</NavLink>
        </header>
    );
}


    export default Nav