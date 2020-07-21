import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import PageWrapper from '../PageWrapper'
import Card from './Card'
import { toggleMenu } from '../../store/actions'
import contactList from '../../img/contact.jpg'
import safe from '../../img/stock2.jpg'
import share from '../../img/event.png'


function Portfolio() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const toggle = (show) => dispatch(toggleMenu(show))
    toggle(false)
  }, [dispatch])

  return (
    <PageWrapper>
      <Container>
        <Row className="pt-5">
          <Card
            link="/portfolio/shareyself"
            title="ShareYSelf"
            desc="Веб-сервис ShareYSelf - для создания событий и обмена идеями"
            image={share}
          />
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
