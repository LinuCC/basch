import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'

export default class CardFooter extends BaseComponent {
  render() {
    const {className, children} = this.props
    const classes = `card-footer ${(className) ? className : ''}`
    return <h4 className={classes}>
      {children}
    </h4>
  }
}
