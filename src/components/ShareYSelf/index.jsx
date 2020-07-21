import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PageWrapper from '../PageWrapper'
import style from './share.module.scss'


function ShareYSelf() {
  return (
    <PageWrapper>
      <Container>
        <Row className="pt-5">
          <Col xs={12}>
            <div className={style.text}>Веб-сервис ShareYSelf</div>
            <a className={style.link} href="https://seneka13.github.io/ShareYSelf-project/" target="_blank" rel="noreferrer noopener">Посмотреть сайт</a>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  )
}

export default ShareYSelf
