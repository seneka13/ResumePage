import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './homepage.module.scss'
import PageWrapper from '../PageWrapper'

function Development() {
  return (
    <PageWrapper>
      <div className={styles.home}>
        <Container>
          <h3 className={styles.name}>Привет, я</h3>
          <h1 className={styles.title}>
            <span className={styles.uppercase}>
              F
            </span>ront End <br />
            <span className={styles.uppercase}>Разработчик.</span>
          </h1>
        </Container>
      </div>
    </PageWrapper>
  )
}

export default Development
