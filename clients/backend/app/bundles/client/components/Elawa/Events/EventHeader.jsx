import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {Row, Col, FormControl, DropdownButton} from 'react-bootstrap'
import i18n from 'i18n-js'

import Card, {CardBlock} from 'libs/components/Bootstrap/Card/Card'

// import css from './EventHeader.scss'

export default class EventHeader extends BaseComponent {

  constructor(props, context) {
    super(props, context)
    this.state = {
      nameValue: props.event.get('name'),
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.event.get('name') != this.props.event.get('name')) {
      this.setState({nameValue: nextProps.event.get('name')})
    }
  }

  _nameChanged = (ev) => {
    this.setState({nameValue: ev.target.value})
  }

  _finishNameEdit = () => {
    this.props.finishNameEdit(this.state.nameValue)
  }

  _name = () => {
    const {displayNameEdit, event} = this.props
    if(displayNameEdit) {
      return <FormControl
        bsSize='large'
        value={this.state.nameValue}
        onChange={this._nameChanged}
        onBlur={this._finishNameEdit}
        onKeyDown={(ev) => {if(ev.keyCode == 13) {this._finishNameEdit()}}}
      />
    }
    else {
      return <h1 onDoubleClick={this.props.showNameEdit}>
        {event.get('name')}
      </h1>
    }
  }

  _translatedStatus = (status) => {
    return i18n.t(`activerecord.attributes.bs/elawa/event.statuses.${status}`)
  }

  _status = () => {
    const statuses = ['planned', 'active', 'archived']
    const styles = {
      planned: 'success',
      active: 'primary',
      archived: 'secondary'
    }
    return <DropdownButton
      id={`elawa-event-status-dropdown-${this.props.event.get('id')}`}
      bsStyle={styles[this.props.event.get('status')]} bsSize='large'
      title={this._translatedStatus(this.props.event.get('status'))}
    >
      {statuses.map((status, index) => {
        return <button
          className='dropdown-item'
          key={index}
          onClick={(ev) => { this.props.updateStatus(status); ev.preventDefault() }}
        >
          {this._translatedStatus(status)}
        </button>
      })}
    </DropdownButton>
  }

  render() {
    return <Card>
      <CardBlock>
        <Row>
          <Col md={8}>
            {this._name()}
          </Col>
          <Col md={4}>
            <div className='pull-right'>
              {this._status()}
            </div>
          </Col>
        </Row>
      </CardBlock>
    </Card>
  }
}
