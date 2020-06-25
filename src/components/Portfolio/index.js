import React from 'react'
import { Container, Row } from 'react-bootstrap'
import PageWrapper from '../PageWrapper'
import Card from './Card'
import contactList from '../../img/contact.jpg'
import safe from '../../img/safe.jpg'


function Portfolio() {
  return (
    <PageWrapper>
      <Container>
        <Row className="pt-5">
          <Card
            link="http://134.209.252.196"
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
