import React from 'react';
import SocialIcons from './SocialIcons';
import Avatar from './Avatar';
import avatar from '../../img/sam.jpg';
import styles from "./sidebar.module.scss";
import {NavLink} from 'react-router-dom';



function Sidebar() {

    const navItems = [
        {id:0, to:'/', text:'Home'},
        {id:1, to:'/about', text:'About'},
        {id:2, to:'/contact', text:'Contact'},
        {id:3, to:'/portfolio', text:'Portfolio'},
        {id:4, to:'/resume', text:'Resume'}
    ]

    return (
        <aside className={styles.sidebar}>
            <Avatar avatar={avatar} avatarStyle={styles.avatar}/>
            <div className={styles.name}>Sam <span className={styles.upper}>M.</span></div>
            {navItems.map(item => ( 
                <div className={styles.nav}>
                    <div className={styles.link}>
                        <NavLink key={item.id}
                        className = {styles.link}
                        activeClassName={styles['active-link']} 
                        exact 
                        to={item.to}>
                        {item.text}
                        </NavLink>
                    </div>
                </div>
            ))}
            <SocialIcons />
        </aside>
    );
}

    export default Sidebar