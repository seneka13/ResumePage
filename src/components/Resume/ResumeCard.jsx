import React from 'react'
import { string, node } from 'prop-types'
import { Col } from 'react-bootstrap'
import styles from './resume.module.scss'


function ResumeCard({ title, desc, date, icon }) {
  return (
    <Col xs={12} md={6} className="mb-4">
      <div className={styles.resumeCard}>
        <h4 className={styles.title}>{title}</h4>
        <time className={styles.date}>{date}</time>
        <div className={styles.divider} />
        <p className={styles.desc}>{desc}</p>
        {icon}
      </div>
    </Col>
  )
}

ResumeCard.propTypes = {
  date: string,
  title: string,
  desc: string,
  icon: node,
}

export default ResumeCard
