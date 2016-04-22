import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'

import css from './Breadcrumbs.scss'

export default class Breadcrumbs extends BaseComponent {

  _items = () => {
    const {items} = this.props
    return items.map((item) => {
      <li>
        (item.link) ? <Link to={item.link}>item.content</Link> : item.content
      </li>
    })
  }

  render() {
    return (
      <ol className={css.breadcrumbs}>
        {this._items()}
      </ol>
    )
  }
}
