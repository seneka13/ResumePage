import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import PageWrapper from '../PageWrapper'
import Card from './Card'
import SkilssIcon from '../Icons/SkillsIcon'
import { toggleMenu } from '../../store/actions'
import contactList from '../../img/contact.jpg'
import safe from '../../img/stock2.jpg'
import PageTitle from '../PageTitle'
import share from '../../img/event.png'
import styles from './portfolio.module.scss'


function Portfolio() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const toggle = (show) => dispatch(toggleMenu(show))
    toggle(false)
  }, [dispatch])

  return (
    <PageWrapper>
      <Container className="pt-5">
        <PageTitle text="Мои работы" icon={<SkilssIcon className={styles.icon} />} />
        <Row className="pt-5 pb-5">
          <Card
            link="/portfolio/shareyself"
            title="ShareYSelf"
            desc="Веб-сервис - для создания событий и обмена идеями"
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
