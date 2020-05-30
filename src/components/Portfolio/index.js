import React from 'react';
import PageWrapper from '../PageWrapper';
import Card from './Card';
import styles from './portfolio.module.scss';
import contactList from '../../img/contact.jpg';


function Portfolio() {
    return (
    <PageWrapper>
        <div className={styles.portfolioList}>
        <Card 
            link="/portfolio/contact-list"
            title='Contact list'
            desc='App for create contacts'
            image = {contactList}
        />
        <Card 
            link="/portfolio/todo-list"
            title="Todo List"
            desc='Some desc'
        />
        </div>
    </PageWrapper>
        );
    }

    export default Portfolio