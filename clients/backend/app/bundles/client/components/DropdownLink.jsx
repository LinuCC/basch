import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'

import {Dropdown} from 'react-bootstrap-4'
import Icon from 'react-fontawesome'

export default (props) => {
  return <Dropdown componentClass='div'>
    <a href="#" bsRole="toggle" onClick={(e) => e.preventDefault()}>
      <Icon name='cog' size='lg'></Icon>
    </a>
    <Dropdown.Menu>
      {props.children}
    </Dropdown.Menu>
  </Dropdown>
}
