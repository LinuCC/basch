import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import { Input, Button } from 'react-bootstrap'
import i18n from 'i18n-js'

// import css from './Settings.scss'

export default class Settings extends BaseComponent {
  render() {
    return <form className='form-horizontal'>
      <Input type="email"
        label={i18n.t('activerecord.attributes.bs/user.email')}
        labelClassName='col-xs-2 form-control-label'
        wrapperClassName='col-xs-10'
        value={'My Email'} />
    </form>
  }
}
