import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './sidebar.module.scss'
import HomeIcon from '../Icons/HomeIcon'
import AboutIcon from '../Icons/AboutIcon'
import ContactIcon from '../Icons/ContactIcon'
import PortfolioIcon from '../Icons/PortfolioIcon'
import ResumeIcon from '../Icons/ResumeIcon'


function Nav() {
  const navItems = [
    { id: 0, to: '/', text: 'Home', icon: HomeIcon },
    { id: 1, to: '/about', text: 'About', icon: AboutIcon },
    { id: 2, to: '/contact', text: 'Contact', icon: ContactIcon },
    { id: 3, to: '/portfolio', text: 'Portfolio', icon: PortfolioIcon },
    { id: 4, to: '/resume', text: 'Resume', icon: ResumeIcon },
  ]

  return (
    <>
      {navItems.map((item) => {
        const Icon = item.icon
        return (
          <div key={item.id} className={styles.nav}>
            <div className={styles.link}>
              <NavLink
                className={styles.link}
                activeClassName={styles.active}
                exact
                to={item.to}
              >
                {item.text}
              </NavLink>
              <Icon className={styles.navIcon} />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Nav
