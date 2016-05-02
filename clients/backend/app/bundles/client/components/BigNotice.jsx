import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'

import css from './BigNotice.scss'

export default (props) => {
  return <div className={css.container}>
    <h3 className={css.heading}>
      {props.children}
    </h3>
  </div>
}
