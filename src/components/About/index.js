import React from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import PageWrapper from '../PageWrapper'
import AboutInfo from './AboutInfo'
import SkillsIcon from '../Icons/SkillsIcon'
import AboutIcon from '../Icons/AboutIcon'
import { toggleMenu } from '../../store/actions'
import ProgressCircles from './ProgressCircles'
import PageTitle from '../PageTitle'
import style from './about.module.scss'


function About() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const toggle = (show) => dispatch(toggleMenu(show))
    toggle(false)
  }, [dispatch])

  return (
    <PageWrapper>
      <Container className="pt-5">
        <PageTitle text="Обо мне" icon={<AboutIcon className={style.icon} />} />
        <AboutInfo />
        <PageTitle text="Мои навыки" icon={<SkillsIcon className={style.icon} />} />
        <ProgressCircles />
      </Container>
    </PageWrapper>
  )
}


export default About
