import React from 'react'
import { node, string } from 'prop-types'
import style from './title.module.scss'


function PageTitle({ icon, text }) {
  return (
    <>
      <div className={style.iconLine}>
        {icon}
      </div>
      <h2 className={style.title}>{text}</h2>
    </>
  )
}

PageTitle.propTypes = {
  icon: node,
  text: string,
}

export default PageTitle
