import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import PageWrapper from '../PageWrapper'
import Card from './Card'
import { toggleMenu } from '../../store/action'
import contactList from '../../img/contact.jpg'
import safe from '../../img/safe.jpg'


function Portfolio() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const toggle = () => dispatch(toggleMenu())
    toggle(false)
  }, [dispatch])

  return (
    <PageWrapper>
      <Container>
        <Row className="pt-5">
          <Card
            link="/portfolio/safe-city"
            title="MDN Group"
            desc="Сайт ОсОО Охранное агентство 'Безопасный город'"
            image={safe}
          />
          <Card
            link="/portfolio/contact-list"
            title="Контактный лист"
            desc="Приложения для добавления контактов и описания к ним"
            image={contactList}
          />
        </Row>
      </Container>
    </PageWrapper>
  )
}

export default Portfolio
