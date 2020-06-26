import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PageWrapper from '../PageWrapper'
import style from './safe.module.scss'



function SafeCity() {
  return (
    <PageWrapper>
      <Container>
        <Row className="pt-5">
          <Col xs={12}>
          <div className={style.text}>Сайт Охранного агентства "Безопасный город"</div>
          <a className={style.link} href="http://134.209.252.196/" target="_blank" rel="noreferrer noopener">Посмотреть сайт</a>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  )
}

export default SafeCity
