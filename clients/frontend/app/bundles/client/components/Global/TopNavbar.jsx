import React from 'react'
import {Navbar, Nav, NavItem, Button} from 'react-bootstrap'
import {IndexLink, Link} from 'react-router'
import BaseComponent from 'libs/components/BaseComponent'

import css from './TopNavbar.scss'

export default class TopNavbar extends BaseComponent {

  render() {
    return <Navbar className={`${css.navbar} navbar-dark`}>
      <Navbar.Header>
        <Navbar.Brand>
          {this.props.orgName}
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
      </Nav>
      <div className='pull-xs-right'>
        <Button bsStyle='link' href='/backend' className={css.btn}>
          Backend
        </Button>
        <Button bsStyle='link' href='/users/sign_out' className={css.btn}>
          Logout
        </Button>
      </div>
    </Navbar>
  }
}
