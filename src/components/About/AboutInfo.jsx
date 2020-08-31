import React from 'react'
import { Row, Col } from 'react-bootstrap'
import portrait from '../../img/portrait.png'
import styles from './about.module.scss'


function AboutInfo() {
  return (
    <div className={`${styles.aboutInfo} mb-5 mt-5`}>
      <Row>
        <Col xs={12} md={6} lg={3} className="d-flex align-items-center">
          <img src={portrait} alt="portrait" />
        </Col>
        <Col xs={12} md={6} lg={9}>
          <h3 className={styles.aboutTitle}><span>П</span>ривет , меня зовут Самат</h3>
          <p className={styles.aboutText}>Мне 27 лет.<br />
            Опыт web-разработки более 1 года. Владею HTML5/CSS3/JavaScript(ReactJS, Redux). <br />
            Более подробную информацию о моих навыках вы можете просмотреть ниже. <br />
            Имею хорошие аналитические способности. Легко и быстро обучаем. Быстро вливаюсь в коллективную работу. <br />
            Моей первоначальной целью является позиция Junior Front End разработчика, после чего хочу в течении 3-4 лет дорасти до тимлида.
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default AboutInfo
