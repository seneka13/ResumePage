import React from 'react'
import Burger from 'react-css-burger';
import styles from "./burger.module.scss"
import { toggleMenu } from '../../store/action'
import {connect} from 'react-redux';

function BurgerBtn ({status, toggle}) {
    return (
        <div className={styles.burgerBtn}>
        <Burger
        onClick={() => toggle(!status)}
        active={status}
        burger="arrowturn"
        color="#dc9624"
        hoverOpacity={0.6}
        scale={0.6}
        style={{outline:'none'}}
        />
        </div>
    );
}


const MapStateToProps = (state) => ({
    status: state.status,
})

const MapDispatchToProps = (dispatch) => ({
    toggle: (status) => dispatch(toggleMenu(status)),
})


export default connect(MapStateToProps, MapDispatchToProps) (BurgerBtn)
