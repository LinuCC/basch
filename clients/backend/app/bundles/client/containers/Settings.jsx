import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {connect} from 'react-redux'
import {ButtonInput, Input, Button} from 'react-bootstrap'
import RailsForm from 'containers/RailsForm'
import i18n from 'i18n-js'


import DangerZone from './DangerZone'
import css from './Settings.scss'

class Settings extends BaseComponent {

  constructor(props, context) {
    super(props, context)
    this.state = {
      email: null,
      password: null,
      password_repeat: null,
    }
  }

  componentWillMount() {
    this.setState({
      email: this.props.user.get('email'),
      password: '',
      password_repeat: '',
    });
  }

  _emailChanged = (event) => {
    this.setState({email: event.target.value})
  }

  _passwordChanged = (event) => {
    this.setState({password: event.target.value})
  }

  _passwordRepeatChanged = (event) => {
    this.setState({password_repeat: event.target.value})
  }

  render() {
    const {email, password, password_repeat} = this.state
    return <div>
      <RailsForm
        className='form-horizontal'
        action={`settings/${this.props.user.get('id')}`}
        method='PATCH'>
        <Input type="email" id='user[email]' name='user[email]'
          label={i18n.t('activerecord.attributes.bs/user.email')}
          labelClassName='col-xs-2 form-control-label'
          wrapperClassName='col-xs-10'
          groupClassName='row'
          value={email} onChange={this._emailChanged} />
        <ButtonInput
          type='submit' bsStyle='primary'
          wrapperClassName='col-xs-offset-2 col-xs-10' groupClassName='row'
          value={i18n.t('frontend.settings.change_email')}
          disabled={this.props.user.get('email') == email} />
      </RailsForm>
      <RailsForm
        className='form-horizontal'
        action={`settings/${this.props.user.get('id')}`}
        method='PATCH'>
        <Input type="password" id='user[password]' name='user[password]'
          label={i18n.t('activerecord.attributes.bs/user.password')}
          labelClassName='col-xs-2 form-control-label'
          wrapperClassName='col-xs-10'
          groupClassName='row'
          value={password} onChange={this._passwordChanged} />
        <Input type="password" id='user[password_confirmation]'
          name='user[password_confirmation]'
          label={i18n.t('activerecord.attributes.bs/user.password_confirmation')}
          labelClassName='col-xs-2 form-control-label'
          wrapperClassName='col-xs-10'
          groupClassName='row'
          value={password_repeat} onChange={this._passwordRepeatChanged} />
        <ButtonInput
          type='submit' bsStyle='primary'
          wrapperClassName='col-xs-offset-2 col-xs-10' groupClassName='row'
          value={i18n.t('frontend.settings.change_password')}
          disabled={(password.length < 1 || password != password_repeat)} />
      </RailsForm>
      <DangerZone className={css.danger_zone} user={this.props.user} />
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps
)(Settings);
