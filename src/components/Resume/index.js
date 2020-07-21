import React from 'react'
import { useDispatch } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import PageWrapper from '../PageWrapper'
import { toggleMenu } from '../../store/actions'
import ResumeCard from './ResumeCard'

function Resume() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const toggle = (show) => dispatch(toggleMenu(show))
    toggle(false)
  }, [dispatch])
  return (
    <PageWrapper>
      <Container>
        <Row className="pt-5">
          <ResumeCard />
        </Row>
      </Container>

    </PageWrapper>
  )
}


export default Resume
