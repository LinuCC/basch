import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import Card, {CardHeader, CardBlock} from 'libs/components/Bootstrap/Card/Card'
import {ButtonInput} from 'react-bootstrap'
import i18n from 'i18n-js'

import css from './DangerZone.scss'

export default class DangerZone extends BaseComponent {
  render() {
    const {className} = this.props
    const cardClasses = `${css.body} ${(className ? className : '')}`

    return <Card bsStyle='danger' inverse className={cardClasses}>
      <CardHeader className="text-xs-center bg-danger">
        {i18n.t('frontend.danger_zone.title')}
      </CardHeader>
      <CardBlock>
        <p>
          {i18n.t('frontend.danger_zone.account_lock_explanation')}
        </p>
        <form className='form-horizontal'>
          <ButtonInput
            type='submit' bsStyle='danger'
            value={i18n.t('frontend.settings.lock_account')} />
        </form>
      </CardBlock>
    </Card>
  }
}
