import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PageWrapper from '../PageWrapper'
import share from '../../img/share.png'
import style from './share.module.scss'


function ShareYSelf() {
  return (

    <PageWrapper>
      <div>
        <Container>
          <Row className="pt-5">
            <Col xs={12} className="d-flex flex-column align-items-center">
              <div className={style.text}>Сайт Охранного агентства "Безопасный город"</div>
              <a className={style.link} href="https://seneka13.github.io/ShareYSelf-project/" target="_blank" rel="noreferrer noopener">Посмотреть сайт</a>
              <img className={style.img} src={share} alt="safecity" />
            </Col>
          </Row>
        </Container>
      </div>
    </PageWrapper>
  )
}

export default ShareYSelf
