import React from 'react';
import Nav from '../Nav';
import PageWrapper from '../PageWrapper';
import styles from './portfolio.module.scss'
import { NavLink } from 'react-router-dom';

function Portfolio() {
    return (
    <PageWrapper>
        <NavLink to='portfolio/contact-list'>
            Contact List
        </NavLink>
    </PageWrapper>
    );
    }

    export default Portfolio