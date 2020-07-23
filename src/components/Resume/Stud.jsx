import React from 'react'
import { Row } from 'react-bootstrap'
import StudIcon from '../Icons/StudIcon'
import ResumeCard from './ResumeCard'
import styles from './resume.module.scss'

function Stud() {
  return (
    <Row className="pt-4">
      <ResumeCard
        title="It Academy"
        date="06.12.2019г. - 25.07.2020г."
        desc="Front-end Development - HTML, CSS, JS. Разработка пользовательских интерфейсов на ReactJS.
            Прослушано 200 часов лекций. Более 400 часов практики."
        icon={<StudIcon className={styles.cardIcon} />}
      />
      <ResumeCard
        title="Кыргызский национальный университет"
        date="06.12.2010г. - 25.07.2015г."
        desc='Юридический факультет (Специалитет). Направление: "Гражданское право и процесс"'
        icon={<StudIcon className={styles.cardIcon} />}
      />
      <ResumeCard
        title="Кыргызский национальный университет"
        date="01.2017г. - 25.07.2019г."
        desc='Факультет переподготовки и повышения кадров. Направление: &nbsp;
        "Экономика и менеджмент".'
        icon={<StudIcon className={styles.cardIcon} />}
      />
    </Row>
  )
}


export default Stud
