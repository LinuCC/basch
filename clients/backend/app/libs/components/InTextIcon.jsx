import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import Icon from 'react-fontawesome'
import _ from 'lodash'

import css from './InTextIcon.scss'

export default class InTextIcon extends BaseComponent {
  render() {
    const iconProps = _.merge({}, this.props, {className: css.inTextIcon})
    return <Icon {...iconProps}/>
  }
}
