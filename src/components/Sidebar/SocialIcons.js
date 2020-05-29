import React from 'react';
import Facebook from '../Icons/Facebook';
import Github from '../Icons/Github';
import Telegram from '../Icons/Telegram';
import Whatsapp from '../Icons/Whatsapp'
import styles from "./sidebar.module.scss";

function SocialIcons() {

    const socialLink = [ 
        {id: 1, social: <Facebook className={styles['social-icon']}/>, href:'https://www.facebook.com/profile.php?id=100024608370678'},
        {id: 2, social: <Github className={styles['social-icon']}/>, href:'https://github.com/seneka13'},
        {id: 3, social: <Telegram className={styles['social-icon']}/>, href:'https://telegram.org//'},
        {id: 4, social: <Whatsapp className={styles['social-icon']}/>, href:'https://www.whatsapp.com/'}
    ]

    return (
        <div className={styles.social}>
            {socialLink.map(item => (
                <a key={item.id} href={item.href} target='_blank' rel="noreferrer noopener">{item.social}</a>
            ))}
        </div>
    );
}

    export default SocialIcons