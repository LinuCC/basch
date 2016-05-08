import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import i18n from 'i18n-js'
import {Link} from 'react-router'
import {LinkContainer} from 'react-router-bootstrap'
import Card, {CardBlock, CardFooter} from 'libs/components/Bootstrap/Card/Card'
import {Row, Col, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'
import Icon from 'react-fontawesome'
import alert from 'libs/alert'

import css from './SegmentOverview.scss'

const NameInput = (props) => {
  return <FormGroup className='row'>
    <Col md={8} mdOffset={2}>
      <FormControl type='text' value={props.name}
        placeholder={i18n.t('activerecord.attributes.bs/elawa/segment.name')}
        onBlur={props.onBlur}
        onChange={props.onChange}
      />
    </Col>
  </FormGroup>
}

const Actions = (props) => {
  return <Row>
    <Col xs={12}>
      <Button bsStyle='primary'>
        Sessions [KUNDE?]
      </Button>
      <LinkContainer to={`/backend/elawa/segments/${props.segmentId}`}>
        <Button bsStyle='primary'>
          {i18n.t('backend.pages.elawa.segments.performances.title')}
        </Button>
      </LinkContainer>
    </Col>
  </Row>
}

const SubmitButton = (props) => {
  return <Row>
    <Col xs={12}>
      <Button
        bsStyle='primary'
        className='pull-right'
        onClick={props.onSubmit}
      >
        <Icon name='save' /> {
          i18n.t('helpers.submit.submit', {model:
            i18n.t('activerecord.models.bs/elawa/segment')
          })
        }
      </Button>
    </Col>
  </Row>
}

export default class  extends BaseComponent {

  constructor(props, context) {
    super(props, context)
    const {segment} = props
    this.state = {
      nameVal: segment.get('name') || '',
      startDateVal: moment(segment.get('start_date') || undefined),
      endDateVal: moment(segment.get('end_date') || undefined),
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.segment != this.props.segment) {
      this._resetForm(nextProps.segment)
    }
  }

  _changeName = (ev) => {
    this.setState({nameVal: ev.target.value})
  }

  _changeStartDate = (date) => {
    this.setState({startDateVal: date})
  }

  _changeEndDate = (date) => {
    this.setState({endDateVal: date})
  }

  _segmentStateChanged = () => {
    const {segment} = this.props
    return (
      segment.get('name') != this.state.nameVal ||
      !this.state.startDateVal.isSame(segment.get('start_date')) ||
      !this.state.endDateVal.isSame(segment.get('end_date'))
    )
  }

  /**
   *  @returns Promise
   */
  _updateSegment = () => {
    const {segment} = this.props
    if(segment.get('id') !== undefined && this._segmentStateChanged()) {
      return this.props.onUpdateSegment({
        id: segment.get('id'),
        name: this.state.nameVal,
        start_date: this.state.startDateVal,
        end_date: this.state.endDateVal,
      })
    }
    else {
      // Nothing changed / not yet saved
      return new Promise((resolve, reject) => resolve(this.props.segment))
    }
  }

  _createSegment = () => {
    const {onCreateSegment, segment} = this.props
    const {nameVal, startDateVal, endDateVal} = this.state
    onCreateSegment(
      segment, {
      name: nameVal,
      start_date: startDateVal,
      end_date: endDateVal,
    })
  }

  _deleteSegment = () => {
    const {onRemoveNewSegment, onDeleteSegment, segment} = this.props
    if(segment.get('id') !== undefined) {
      alert.deleteConfirm(
        i18n.t('prefixed.bs/elawa/segment.one'),
        () => onDeleteSegment(segment.get('id'))
      )
    }
    else {
      onRemoveNewSegment(segment)
    }
  }

  _resetForm = (segment) => {
    this.setState({
      nameVal: segment.get('name') || '',
      startDateVal: moment(segment.get('start_date') || undefined),
      endDateVal: moment(segment.get('end_date') || undefined),
    })
  }

  _footerContent = () => {
    const {segment} = this.props
    if(segment.get('id') === undefined) {
      return <SubmitButton onSubmit={this._createSegment} />
    }
    else {
      return <Actions segmentId={segment.get('id')} />
    }
  }

  render() {
    const {segment} = this.props
    const {onShowNameEdit, onHideNameEdit} = this.props
    let name = ''
    if(segment.get('id') === undefined || segment.get('displayEditName')) {
      name = <NameInput
        name={this.state.nameVal}
        onBlur={() => this._updateSegment().then((segment) => onHideNameEdit())}
        onChange={this._changeName}
      />
    }
    else {
      name = <h4 onDoubleClick={onShowNameEdit}>{segment.get('name')}</h4>
    }
    return <Card>
      <CardBlock>
        <div className={css.segmentHeader}>
          <div className={css.segmentName}>
            {name}
          </div>
          <div className={css.deleteButton}>
            <Button
              onClick={this._deleteSegment}
              bsStyle='danger-outline'
              bsSize='sm'
            >
              <Icon name='times' />
            </Button>
          </div>
        </div>
        <Row>
          <Col md={6}>
            <FormGroup className='row'>
              <Col componentClass={ControlLabel} md={4} className='form-control-label'>
                {i18n.t('activerecord.attributes.bs/elawa/segment.start_date')}
              </Col>
              <Col md={8}>
                <DatePicker
                  selected={this.state.startDateVal}
                  onChange={this._changeStartDate}
                  onBlur={this._updateSegment}
                  className='form-control'
                  locale='de'
                />
              </Col>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className='row'>
              <Col componentClass={ControlLabel} md={4} className='form-control-label'>
                {i18n.t('activerecord.attributes.bs/elawa/segment.end_date')}
              </Col>
              <Col md={8}>
                <DatePicker
                  selected={this.state.endDateVal}
                  onChange={this._changeEndDate}
                  onBlur={this._updateSegment}
                  className='form-control'
                  locale='de'
                />
              </Col>
            </FormGroup>
          </Col>
        </Row>
      </CardBlock>
      <CardFooter>
        {this._footerContent()}
      </CardFooter>
    </Card>
  }
}
