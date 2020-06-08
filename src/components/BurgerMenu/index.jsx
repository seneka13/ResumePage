import React from 'react';
import styles from "./burger.module.scss";
import Sidebar from '../Sidebar'
import BurgerBtn from './BurgerBtn'
import {connect} from 'react-redux';

function BurgerMenu({status}) {
    const toggleClass = status ? styles.burgerActive : styles.burgerMenu
    return (
        <div className={toggleClass}>
            <BurgerBtn />
            <Sidebar/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    status: state.status
})

    export default connect(mapStateToProps) (BurgerMenu)