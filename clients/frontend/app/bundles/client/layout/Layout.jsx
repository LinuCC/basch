import React, { PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import BaseComponent from 'libs/components/BaseComponent'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

import './Layout.scss';

const TopNavbar = (props) => {
  return <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        {props.orgName}
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">Link</NavItem>
    </Nav>
  </Navbar>
}

export default class Layout extends BaseComponent {

  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <section>
          <TopNavbar orgName={"Lolcatz"} />
        </section>
        <section>
          {this.props.children}
        </section>
        <section>
          Footer
        </section>
      </div>
    );
  }
}
