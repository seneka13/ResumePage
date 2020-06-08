import React from 'react';
import SocialIcons from './SocialIcons';
import Avatar from './Avatar';
import Nav from './Nav';
import Name from './Name'
import avatar from '../../img/sam.jpg';
import styles from "./sidebar.module.scss";



function Sidebar() {

    return (
        <aside className={styles.sidebar}>
            <Avatar avatar={avatar} avatarStyle={styles.avatar}/>
            <Name/>
            <Nav/>
            <SocialIcons />
        </aside>
    );
}

    export default Sidebar