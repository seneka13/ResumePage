import React from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import PageWrapper from '../PageWrapper'
import AboutInfo from './AboutInfo'
import SkillsIcon from '../Icons/SkillsIcon'
import AboutIcon from '../Icons/AboutIcon'
import { toggleMenu } from '../../store/actions'
import ProgressCircles from './ProgressCircles'
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
        <div className={style.iconLine}>
          <AboutIcon className={style.icon} />
        </div>
        <h2 className={style.title}>Обо мне</h2>
        <AboutInfo />
        <div className={style.iconLine}>
          <SkillsIcon className={style.icon} />
        </div>
        <h2 className={style.title}>Мои навыки</h2>
        <ProgressCircles />
      </Container>
    </PageWrapper>
  )
}


export default About
