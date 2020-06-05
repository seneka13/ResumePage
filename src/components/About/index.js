import React from 'react';
import PageWrapper from '../PageWrapper';
import PercentageCircle from  'reactjs-percentage-circle';



function About() {
    return (
        <PageWrapper>
            <div>
                <PercentageCircle percent={80}></PercentageCircle>
                <PercentageCircle percent={80}>
                <p>Children</p>
                </PercentageCircle>
            </div>
        </PageWrapper>
    );
    }


    export default About