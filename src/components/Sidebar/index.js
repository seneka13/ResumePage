import React from 'react';
import SocialIcons from './SocialIcons';
import Avatar from './Avatar';
import avatar from '../../img/unnamed.jpg'
import styles from "./sidebar.module.scss"


function Sidebar() {

    return (
        <aside className={styles.sidebar}>
            <Avatar avatar={avatar} avatarStyle={styles.avatar}/>
            <SocialIcons />
        </aside>
    );
}

    export default Sidebar