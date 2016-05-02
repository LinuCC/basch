import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {Row, Col, Button} from 'react-bootstrap'
import Icon from 'react-fontawesome'
import i18n from 'i18n-js'

import BigNotice from '#/BigNotice'
import SegmentOverview from './SegmentOverview'
// import css from './SegmentsForm.scss'

export default class SegmentsForm extends BaseComponent {

  _segments = () => {
    const {segments} = this.props
    const {
      onShowNameEdit,
      onHideNameEdit,
      onUpdateSegment,
      onCreateSegment,
    } = this.props
    if(segments.size > 0) {
      return segments.map((segment, index) => {
        return <SegmentOverview
          segment={segment}
          key={index}
          onShowNameEdit={() => onShowNameEdit(segment.get('id'))}
          onHideNameEdit={() => onHideNameEdit(segment.get('id'))}
          onUpdateSegment={(data) => onUpdateSegment(data)}
          onCreateSegment={onCreateSegment}
        />
      })
    }
    else {
      return <BigNotice>
        {i18n.t('backend.elawa.events.show.no_segments')}
      </BigNotice>
    }
  }

  render() {
    const {onNewSegment} = this.props
    return <div>
      <Row>
        <Col xs={12}>
          {this._segments()}
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button
            bsStyle='primary' className='pull-right'
            onClick={onNewSegment}
          >
            <Icon name='plus' fixedWidth />
            {i18n.t('helpers.submit.new', {
              model: i18n.t('activerecord.models.bs/elawa/segment')
            })}
          </Button>
        </Col>
      </Row>
    </div>
  }
}
