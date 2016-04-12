import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import i18n from 'i18n-js'

export default class Dashboard extends BaseComponent {
  render() {
    return <h1>
      {i18n.t('frontend.hello')}
    </h1>
  }
}
