import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import Card, {CardBlock, CardHeader} from 'libs/components/Bootstrap/Card/Card'
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import i18n from 'i18n-js'

export default class NewForm extends BaseComponent {

  constructor(props, context) {
    super(props, context)
    this.state = {
      name: '',
    }
  }

  _valueChanged = (ev) => {
    this.setState({name: ev.target.value})
  }

  render() {
    const t = {
      name: i18n.t('activerecord.attributes.bs/elawa/event.name'),
      create: i18n.t('helpers.submit.new', {
        model: i18n.t('activerecord.models.bs/elawa/event')
      }),
    }
    return <Card>
      <CardHeader>
        {t.create}
      </CardHeader>
      <CardBlock>
        <FormGroup controlId='newEventName'>
          <ControlLabel>
            {t.name}
          </ControlLabel>
          <FormControl
            type='text'
            value={this.state.name}
            placeholder={t.name}
            onChange={this._valueChanged}
          />
        </FormGroup>
        <Button
          bsStyle='primary'
          onClick={() => this.props.onConfirmed(this.state)}
          disabled={this.state.name.length < 1}
        >
          {t.create}
        </Button>
        <Button
          bsStyle='danger'
          onClick={this.props.onCancelled}
          className='pull-xs-right'
        >
          {i18n.t('helpers.cancel')}
        </Button>
      </CardBlock>
    </Card>
  }
}
