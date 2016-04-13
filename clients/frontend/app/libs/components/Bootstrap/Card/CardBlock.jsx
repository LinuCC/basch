import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'

export default class CardBlock extends BaseComponent {
  render() {
    const {className, children} = this.props
    const classes = `card-block ${(className) ? className : ''}`
    return <div className={classes}>
      {children}
    </div>
  }
}
