    import React from 'react';
    import PageWrapper from '../PageWrapper';
    import AboutInfo from './AboutInfo'
    import SkillsIcon from '../Icons/SkillsIcon'
    import AboutIcon from '../Icons/AboutIcon'
    import ProgressCircles from './ProgressCircles'
    import {Container} from 'react-bootstrap'
    import style from './about.module.scss';




    function About() {
    return (
        <PageWrapper>
            <Container>
            <div className={style.aboutInfo}>
                <div className={style.iconLine}>
                    <AboutIcon className={style.icon}/>
                        </div>
                    <h2  className={style.title}>About me</h2>
                        <AboutInfo/>
                        <div className={style.iconLine}>
                    <SkillsIcon className={style.icon}/>
                        </div>
                    <h2  className={style.title}>My skills</h2>
                <ProgressCircles/>
            </div>
            </Container>
        </PageWrapper>
    );
    }


    export default About