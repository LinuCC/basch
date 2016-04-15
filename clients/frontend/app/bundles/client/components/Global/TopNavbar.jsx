import React from 'react'
import {Navbar, Nav, NavItem, Button} from 'react-bootstrap'
import {IndexLink, Link} from 'react-router'
import BaseComponent from 'libs/components/BaseComponent'
import i18n from 'i18n-js'
import Icon from 'libs/components/InTextIcon'

import css from './TopNavbar.scss'

export default class TopNavbar extends BaseComponent {

  render() {
    return <Navbar className={`${css.navbar} navbar-dark`}>
      <Navbar.Header>
        <Link to='/'>
          <Navbar.Brand>
            {this.props.orgName}
          </Navbar.Brand>
        </Link>
      </Navbar.Header>
      <Nav>
      </Nav>
      <div className='pull-xs-right'>
        <Link to='/settings' className={css.link}>
          <Button bsStyle='link'>
            <Icon name='cog' />
            {i18n.t('frontend.pages.settings.title')}
          </Button>
        </Link>
        <a href='/backend' className={css.link}>
          <Button bsStyle='info'>
            <Icon name='list' />
            {i18n.t('frontend.pages.backend.title')}
          </Button>
        </a>
        <Link to='/users/sign_out' className={css.link}>
          <Button bsStyle='danger'>
            <Icon name='sign-out' />
            {i18n.t('frontend.logout')}
          </Button>
        </Link>
      </div>
    </Navbar>
  }
}
