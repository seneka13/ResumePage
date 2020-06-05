import React from 'react';
import styles from './homepage.module.scss';
import PageWrapper from '../PageWrapper';

function Development() {
return (
        <PageWrapper>
            <div className={styles.home}>
                <h3 className={styles.name}>Hey, i'm Sam</h3>
                <h1 className={styles.title}><span className={styles.uppercase}>F</span>ront End <br/><span className={styles.uppercase}>Developer.</span></h1>
            </div>
        </PageWrapper>
)
}

export default Development