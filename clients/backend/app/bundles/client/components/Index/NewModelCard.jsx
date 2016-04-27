import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {Button} from 'react-bootstrap-4'

import Card, {CardBlock} from 'libs/components/Bootstrap/Card/Card'

export default (props) => {
  return <Card>
    <CardBlock>
      <Button bsSize='large' bsStyle='primary-outline' onClick={props.onClick} 
        block>
        {props.children}
      </Button>
    </CardBlock>
  </Card>
}

