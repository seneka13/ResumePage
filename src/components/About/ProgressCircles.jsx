import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Col, Row } from 'react-bootstrap'
import ProgressProvider from './ProgressProvider'
import style from './about.module.scss'

function ProgressCircles() {
  const skills = [
    { progName: 'HTML5', level: '93' },
    { progName: 'CSS3', level: '88' },
    { progName: 'JavaScript', level: '79' },
    { progName: 'JQuery', level: '67' },
    { progName: 'ReactJS', level: '74' },
    { progName: 'Sass/Scss', level: '85' },
    { progName: 'Redux', level: '62' },
    { progName: 'Bootstrap', level: '73' },
    { progName: 'Webpack', level: '61' },
    { progName: 'Babel', level: '70' },
    { progName: 'npm', level: '72' },
    { progName: 'BEM', level: '87' },
  ]
  return (
    <Row>
      {
                skills.map((skill) => (
                  <Col key={skill.progName} xs={6} md={2}>
                    <div className={style.skillBar}>
                      <ProgressProvider valueStart={0} valueEnd={skill.level}>
                        {(value) => (
                          <CircularProgressbar
                            strokeWidth={2}
                            counterClockwise
                            duration={2}
                            value={value}
                            text={`${value}%`}
                            styles={buildStyles({
                              pathTransitionDuration: 2,
                              textSize: '14px',
                              pathColor: '#dc9624',
                              textColor: '#fff',
                              trailColor: '#393737',
                            })}
                          />
                        )}
                      </ProgressProvider>
                      <div className={style.prog}>{skill.progName}</div>
                    </div>
                  </Col>
                ),
                )
            }
    </Row>
  )
}


export default ProgressCircles
