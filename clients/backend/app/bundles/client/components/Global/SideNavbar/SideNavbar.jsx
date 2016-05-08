import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import i18n from 'i18n-js'

import Item from '#/Global/SideNavbar/Item'
import css from './SideNavbar.scss'

export default class SideNavbar extends BaseComponent {

  _items = () => {
    // TODO Put this into the state somehow
    return [
      {content: i18n.t('backend.pages.users.title'), path: '/backend/users'},
      {content: i18n.t('backend.pages.kuwasys.title'), path: '/backend/kuwasys'},
      {content: i18n.t('backend.pages.elawa.title'), path: '/backend/elawa'},
      {content: i18n.t('backend.pages.semesters.title'), path: '/backend/semesters'},
      {content: i18n.t('backend.pages.grades.title'), path: '/backend/grades'},
      {content: i18n.t('backend.pages.locations.title'), path: '/backend/locations'},
      {content: i18n.t('backend.pages.elawa.title'), path: '/backend/elawa'},
      {content: i18n.t('backend.pages.elawa.events.title'), path: '/backend/elawa/events'},
    ]
  }

  _itemsHtml = () => {
    const {allowedItems} = this.props
    return (
      this._items().map((item, index) => {
        if(allowedItems.indexOf(item.path) != -1) {
          return(
            <li key={index} className={css.item}>
              <Item {...item} />
            </li>
          )
        }
      })
    )
  }

  render() {
    return (
      <aside className={css.container}>
        <ul className={css.list}>
          {this._itemsHtml()}
        </ul>
      </aside>
    )
  }
}
