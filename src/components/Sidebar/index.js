import React from 'react';
import SocialIcons from './SocialIcons';
import Avatar from './Avatar'
import styles from "./sidebar.module.scss"

function Sidebar() {

    return (
        <div className={styles.sidebar}>
            <Avatar className={styles.avatar}/>

            <SocialIcons />
        </div>
    );
}

    export default Sidebar