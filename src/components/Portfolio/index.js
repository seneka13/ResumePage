import React from 'react';
import PageWrapper from '../PageWrapper';
import Card from './Card'
import styles from './portfolio.module.scss'
import contact from '../../img/contact.jpg';
import { NavLink } from 'react-router-dom';

function Portfolio() {
    return (
    <PageWrapper>
        <div className={styles.portfolioList}>
        <Card 
            link="/portfolio/contact-list"
            title='Contact list'
            desc='App for add contacts'
            image = {contact}
        />
        <Card 
            link="/portfolio/todo-list"
            title="Todo List"
            desc='fdsfds'
        />
        </div>
    </PageWrapper>
    );
    }

    export default Portfolio