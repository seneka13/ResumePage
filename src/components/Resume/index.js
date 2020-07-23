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
          <ResumeCard
            title="It Academy"
            date="06.12.2019г. - 25.07.2020г."
            desc="Front-end Development - HTML, CSS, JS. Разработка пользовательских интерфейсов на ReactJS.
            Прослушано 200 часов лекций. Более 400 часов практики."
          />
          <ResumeCard
            title="КНУ им. Ж. Баласагына"
            date="06.12.2010г. - 25.07.2015г."
            desc=""
          />
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
