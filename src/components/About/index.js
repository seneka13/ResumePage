import React from 'react';
import Nav from '../Nav/Nav';
import styles from './about.module.css'



function About() {
    console.log(styles)
    return (
    <div className = {styles['title']}>
        <Nav/>
        <h1>
            About
        </h1>
    </div>

    );
    }


    export default About