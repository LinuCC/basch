import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import Card, {CardBlock, CardHeader} from 'libs/components/Bootstrap/Card/Card'
import {Button} from 'react-bootstrap-4'
import i18n from 'i18n-js'

export default (props) => {
  return <Card>
    <CardHeader>
      {i18n.t('helpers.submit.new', {
          model: i18n.t('activerecord.models.bs/elawa/event')
      })}
    </CardHeader>
    <CardBlock>
      <Button bsStyle='danger' bsSize='small' onClick={props.onCancelled}>
        Abbrechen
      </Button>
    </CardBlock>
  </Card>
}
