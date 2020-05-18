import React from 'react';
import {NavLink} from 'react-router-dom';
import style from "./nav.module.css"


function Nav() {

    return (
    <div>
        <NavLink activeClassName ={style['active-link']} exact to="/">About</NavLink>
        <NavLink activeClassName ={style['active-link']} to="/contact">Contact</NavLink>
        <NavLink activeClassName ={style['active-link']} to="/portfolio">Portfolio</NavLink>
        <NavLink activeClassName ={style['active-link']} to="/resume">Resume</NavLink>
    </div>

    );
    }


    export default Nav