import React from 'react'
import { Container } from 'react-bootstrap'
import PageWrapper from '../PageWrapper'
import AboutInfo from './AboutInfo'
import SkillsIcon from '../Icons/SkillsIcon'
import AboutIcon from '../Icons/AboutIcon'
import ProgressCircles from './ProgressCircles'
import style from './about.module.scss'


function About() {
  return (
    <PageWrapper>
      <Container className="pt-5">
        <div className={style.iconLine}>
          <AboutIcon className={style.icon} />
        </div>
        <h2 className={style.title}>About me</h2>
        <AboutInfo />
        <div className={style.iconLine}>
          <SkillsIcon className={style.icon} />
        </div>
        <h2 className={style.title}>My skills</h2>
        <ProgressCircles />
      </Container>
    </PageWrapper>
  )
}


export default About
