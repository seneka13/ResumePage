import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from "./nav.module.scss"

function Nav() {

    const navItems = [
        {id:1, class:'active-link', to:'/', text:'About'},
        {id:2, class:'active-link', to:'/contact', text:'Contact'},
        {id:3, class:'active-link', to:'/portfolio', text:'Portfolio'},
        {id:4, class:'active-link', to:'/resume', text:'Resume'}
    ]

    return (
        <header className={styles.header}>
            {
            navItems.map(item => ( 
                    <NavLink key={item.id}
                    className = {styles.link}
                    activeClassName={styles[item.class]} 
                    exact 
                    to={item.to}>
                    {item.text}
                    </NavLink>
            ))
            }
        </header>
    );
}

    export default Nav