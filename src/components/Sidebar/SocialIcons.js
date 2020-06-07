import React from 'react';
import Facebook from '../Icons/Facebook';
import Github from '../Icons/Github';
import Telegram from '../Icons/Telegram';
import Whatsapp from '../Icons/Whatsapp'
import Linkedin from '../Icons/Linkedin'
import styles from "./sidebar.module.scss";

function SocialIcons() {

    const socialLinks = [ 
        {id: 1, social: Facebook, href:'https://www.facebook.com/profile.php?id=100024608370678'},
        {id: 2, social: Github , href:'https://github.com/seneka13'},
        {id: 3, social: Telegram , href:'https://telegram.org//'},
        {id: 4, social: Whatsapp , href:'https://www.whatsapp.com/'},
        {id: 4, social: Linkedin , href:'https://www.linkedin.com/feed/?trk=404_page'}
    ]

    return (
        <div className={styles.social}>
            {socialLinks.map(item => {
                const Icon = item.social
                return (
                <a 
                key={item.id} 
                href={item.href} 
                target='_blank' 
                rel="noreferrer noopener">
                <Icon className= {styles['social-icon']}/>
                </a>)    
            })}
        </div>
    );
}

    export default SocialIcons