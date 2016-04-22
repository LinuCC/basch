import React from 'react'
import {Navbar, Nav, NavItem, Button} from 'react-bootstrap-4'
import {IndexLink, Link} from 'react-router'
import BaseComponent from 'libs/components/BaseComponent'
import i18n from 'i18n-js'
import Icon from 'libs/components/InTextIcon'

import css from './TopNavbar.scss'

export default class TopNavbar extends BaseComponent {

  render() {
    return <Navbar className={`${css.navbar} navbar-light`} fluid>
      <Navbar.Header>
        <Link to='/backend'>
          <Navbar.Brand>
            {this.props.orgName}
          </Navbar.Brand>
        </Link>
      </Navbar.Header>
      <div className='pull-xs-right'>
        <a href='/'>
          <Button bsStyle='primary-outline'>
            <Icon name='table' />
            {i18n.t('backend.pages.frontend.title')}
          </Button>
        </a>
        <Link to='backend/users/sign_out'>
          <Button bsStyle='primary-outline'>
            <Icon name='sign-out' />
            {i18n.t('backend.logout')}
          </Button>
        </Link>
      </div>
    </Navbar>
  }
}
