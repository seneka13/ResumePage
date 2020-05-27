import React from 'react';
import Facebook from '../Icons/Facebook';
import Github from '../Icons/Github';
import Telegram from '../Icons/Telegram';
import Whatsapp from '../Icons/Whatsapp'
import styles from "./sidebar.module.scss";

function SocialIcons() {
    return (
        <div className={styles.social}>
            <a href="https://www.facebook.com/profile.php?id=100024608370678"
            target='_blank'
            rel="noopener noreferrer">
                <Facebook  className={styles['social-icon']} />
            </a>
            <a href="https://github.com/seneka13" 
            target='_blank'
            rel="noopener noreferrer">
            <Github  className={styles['social-icon']}/>
            </a>
            <a href=""><Telegram className={styles['social-icon']}/></a>
            <a href=""><Whatsapp  className={styles['social-icon']}/></a>
        </div>
    );
}

    export default SocialIcons