import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'

import css from './Footer.scss'

export default class Footer extends BaseComponent {
  render() {
    return <div className={css.main}>
      <div className={css.backdrop}></div>
      <div className={css.text}>
      </div>
    </div>
  }
}
