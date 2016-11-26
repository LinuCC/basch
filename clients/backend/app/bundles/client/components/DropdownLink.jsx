import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'

import {Dropdown} from 'react-bootstrap-4'
import Icon from 'react-fontawesome'


class DropdownLink extends React.Component {
  render() {
    return <Dropdown componentClass='div' id={this.props.id}>
      <a href="#" bsRole="toggle" onClick={(e) => e.preventDefault()}>
        <Icon name='cog' size='lg'></Icon>
      </a>
      <Dropdown.Menu>
        {this.props.children}
      </Dropdown.Menu>
    </Dropdown>
  }
}

DropdownLink.propTypes = {
  id: React.PropTypes.number.isRequired,
  children: React.PropTypes.array
}

export default DropdownLink
