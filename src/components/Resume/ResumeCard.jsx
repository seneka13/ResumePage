import React from 'react'
import { string } from 'prop-types'
import { Col } from 'react-bootstrap'
import styles from './resume.module.scss'


function ResumeCard({ title, desc, date }) {
  return (
    <Col xs={12} md={6} className="mb-5">
      <div className={styles.resumeCard}>
        <h4 className={styles.title}>{title}</h4>
        <time className={styles.date}>{date}</time>
        <div className={styles.divider} />
        <p className={styles.desc}>{desc}</p>
      </div>
    </Col>
  )
}

ResumeCard.propTypes = {
  date: string,
  title: string,
  desc: string,
}

export default ResumeCard
