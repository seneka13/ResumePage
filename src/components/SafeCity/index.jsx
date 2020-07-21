import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PageWrapper from '../PageWrapper'
import style from './safe.module.scss'


function SafeCity() {
  return (
    <PageWrapper>
      <div>
        <Container>
          <Row className="pt-5">
            <Col xs={12}>
              <div className={style.text}>Сайт Охранного агентства "Безопасный город"</div>
              <a className={style.link} href="http://safecity.kg/" target="_blank" rel="noreferrer noopener">Посмотреть сайт</a>
            </Col>
          </Row>
        </Container>
      </div>
    </PageWrapper>
  )
}

export default SafeCity
