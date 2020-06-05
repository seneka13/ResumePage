    import React from 'react';
    import PageWrapper from '../PageWrapper';
    import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
    import 'react-circular-progressbar/dist/styles.css';
    import ProgressProvider from './ProgressProvider';
    import {Col, Row} from 'react-bootstrap'
    import style from './about.module.scss';




    function About() {
        const skills = [
            {progName:'HTML5', level:'90'},
            {progName:'CSS3', level:'85'},
            {progName:'JavaScript', level:'80'},
            {progName:'JQuery', level:'60'},
            {progName:'ReactJS', level:'70'}
        ]
    return (
        <PageWrapper>
            <Row>
            {
                skills.map(skill => 
                <Col key={skill.progName} xs={6} md={3}>
                    <div className={style.skillBar}>
                    <ProgressProvider valueStart={0} valueEnd={skill.level}>
                        {value => <CircularProgressbar 
                        strokeWidth={2} 
                        className={style.circle} 
                        counterClockwise={true}
                        duration={2}
                        value={value} 
                        text={`${value}%`}
                        styles={buildStyles({
                        textSize: '14px',
                        pathColor: `#dc9624`,
                        textColor: '#fff',
                        trailColor: '#393737'
                        })} />}
                    </ProgressProvider>
                    <div>{skill.progName}</div>
                    </div>
                </Col>
                )
            }
            </Row>
        </PageWrapper>
    );
    }


    export default About