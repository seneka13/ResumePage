import React from 'react';
import PropTypes from 'prop-types'
import placeholder from '../../img/placeholder.png'

function Avatar({avatarStyle, avatar = placeholder}) {
    return (
        <img className={avatarStyle} src={avatar} alt="avatar"/>
    );
}


Avatar.propTypes = {
    avatar: PropTypes.string
}

    export default Avatar