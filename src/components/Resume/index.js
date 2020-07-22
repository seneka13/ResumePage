import React from 'react'
import { useDispatch } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import PageWrapper from '../PageWrapper'
import { toggleMenu } from '../../store/actions'
import ResumeIcon from '../Icons/ResumeIcon'
import PortfolioIcon from '../Icons/PortfolioIcon'
import PageTitle from '../PageTitle'
import ResumeCard from './ResumeCard'
import styles from './resume.module.scss'

function Resume() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const toggle = (show) => dispatch(toggleMenu(show))
    toggle(false)
  }, [dispatch])
  return (
    <PageWrapper>
      <Container className="pt-5">
        <PageTitle text="Образование" icon={<ResumeIcon className={styles.icon} />} />
        <Row className="pt-4">
          <ResumeCard />
          <ResumeCard />
        </Row>
        <PageTitle text="Опыт работы" icon={<PortfolioIcon className={styles.icon} />} />
        <Row className="pt-4">
          <ResumeCard />
          <ResumeCard />
        </Row>
      </Container>

    </PageWrapper>
  )
}


export default Resume
