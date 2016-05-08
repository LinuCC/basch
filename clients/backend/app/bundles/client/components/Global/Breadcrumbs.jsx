import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {Link} from 'react-router'
import BreadcrumbsBib from 'react-breadcrumbs'

import css from './Breadcrumbs.scss'

export default class Breadcrumbs extends BaseComponent {

  _items = () => {
    const {routes} = this.props
    console.warn(routes)
    return routes.map((item, index) => (
      <li key={index}>
        <Link
          to={item.path || ''}
          onlyActiveOnIndex={true}
          activeClassName="breadcrumb-active"
        >
          {item.component.title || '???'}
        </Link>
      </li>
    ))
  }

  render() {
    return (
      <BreadcrumbsBib
        routes={this.props.routes}
        params={this.props.params}
      />
    )
  }
}
