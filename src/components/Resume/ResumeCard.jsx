import React from 'react'
import { string } from 'prop-types'
import { Col } from 'react-bootstrap'
import styles from './resume.module.scss'


function ResumeCard({ title, desc, date }) {
  return (
    <Col xs={12} md={6} className="mb-4">
      <div className={styles.resumeCard}>
        <h4>{title}</h4>
        <p>{date}</p>
        <p>{desc}</p>
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
