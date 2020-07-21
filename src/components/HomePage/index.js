import React from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../../store/actions'
import styles from './homepage.module.scss'
import PageWrapper from '../PageWrapper'

function Development() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const toggle = () => dispatch(toggleMenu())
    toggle(false)
  }, [dispatch])
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
