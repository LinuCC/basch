import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'

export {default as CardBlock} from './CardBlock'
export {default as CardFooter} from './CardFooter'
export {default as CardHeader} from './CardHeader'
export {default as CardTitle} from './CardTitle'

export default class Card extends BaseComponent {
  render() {
    const {className, block, children, bsStyle, inverse} = this.props
    const classes = 'card' +
      `${(className) ? ` ${className}` : ''}` +
      `${(bsStyle) ? ` card-${bsStyle}` : ''}` +
      `${(inverse) ? ' card-inverse' : ''}` +
      `${(block) ? ' card-block' : ''}`
    return <div className={classes}>
      {children}
    </div>
  }
}
