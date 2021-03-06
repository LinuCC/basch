import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {Link} from 'react-router'

import css from './Item.scss'

export default class Item extends BaseComponent {
  render() {
    const {content, path, active} = this.props
    const classes = `${css.link} ${(active) ? css.active : ''}`
    // Link to={path} className={classes}>{content}</Link>
    return (
      <a href={path} className={classes}>{content}</a>
    )
  }
}
