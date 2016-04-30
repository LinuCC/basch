import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'

import css from './TableColumnItem.scss'

export default (props) => {
  return <div className={css.item}>
    {props.children}
  </div>
}
