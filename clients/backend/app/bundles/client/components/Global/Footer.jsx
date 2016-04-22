import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'

import css from './Footer.scss'

export default class Footer extends BaseComponent {
  render() {
    return <footer className={css.footer} />
  }
}
