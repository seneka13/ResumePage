import React from 'react';
import placeholder from '../../img/placeholder.png'

function Avatar({avatarStyle, avatar = placeholder}) {
    return (
        <img className={avatarStyle} src={avatar} alt="avatar"/>
    );
}

    export default Avatar