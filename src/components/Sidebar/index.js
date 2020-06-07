import React from 'react';
import SocialIcons from './SocialIcons';
import Avatar from './Avatar';
import Nav from './Nav'
import avatar from '../../img/sam.jpg';
import styles from "./sidebar.module.scss";



function Sidebar() {

    return (
        <aside className={styles.sidebar}>
            <Avatar avatar={avatar} avatarStyle={styles.avatar}/>
            <div className={styles.name}>
                <span className={styles.upper}>S</span>amat
                <span className={styles.upper}> M</span>usaev
            </div>
            <Nav/>
            <SocialIcons />
        </aside>
    );
}

    export default Sidebar