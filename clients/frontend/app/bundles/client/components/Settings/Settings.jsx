import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {connect} from 'react-redux'
import {Input, Button} from 'react-bootstrap'
import i18n from 'i18n-js'

// import css from './Settings.scss'

class Settings extends BaseComponent {
  render() {
    return <div>
      <form className='form-horizontal'>
        <Input type="email" id='user[email]' name='user[email]'
          label={i18n.t('activerecord.attributes.bs/user.email')}
          labelClassName='col-xs-2 form-control-label'
          wrapperClassName='col-xs-10'
          defaultValue={this.props.email}
          groupClassName='row' />
      </form>
      <form className='form-horizontal'>
        <Input type="password" id='user[password]' name='user[password]'
          label={i18n.t('activerecord.attributes.bs/user.password')}
          labelClassName='col-xs-2 form-control-label'
          wrapperClassName='col-xs-10'
          groupClassName='row' />
        <Input type="password" id='user[password_confirmation]' 
          name='user[password_confirmation]'
          label={i18n.t('activerecord.attributes.bs/user.password_confirmation')}
          labelClassName='col-xs-2 form-control-label'
          wrapperClassName='col-xs-10'
          groupClassName='row' />
      </form>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {email: state.user.get('email')}
}

export default connect(
  mapStateToProps
)(Settings);
