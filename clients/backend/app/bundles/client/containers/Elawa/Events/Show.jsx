import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {connect} from 'react-redux'
import * as actions from 'actions/elawaEventsShowActionCreators'
import i18n from 'i18n-js'

import Immutable from 'immutable'

import EventHeader from '#/Elawa/Events/EventHeader'
import SegmentsForm from '#/Elawa/Events/SegmentsForm'

// import css from './Show.scss'
const EventActions = (props) => {
  return <div>Actions</div>
}

class Show extends BaseComponent {

  componentDidMount() {
    this.props.fetchEvent(this.props.params.eventId)
  }

  render() {
    const {event, newSegments} = this.props
    const {
      showEventNameEdit,
      displayEventNameEdit,
      finishEventNameEdit,
      updateEventStatus,
      newSegment,
      showSegmentNameEdit,
      hideSegmentNameEdit,
      updateSegment,
      createSegment,
      deleteSegment,
      removeNewSegment,
    } = this.props
    return <div>
      <EventHeader
        event={event}
        showNameEdit={showEventNameEdit}
        displayNameEdit={displayEventNameEdit}
        finishNameEdit={(name) => finishEventNameEdit(event.get('id'), name)}
        updateStatus={(status) => updateEventStatus(event.get('id'), status)}
      />
      <SegmentsForm
        segments={event.get('segments').concat(newSegments)}
        onShowNameEdit={showSegmentNameEdit}
        onHideNameEdit={hideSegmentNameEdit}
        onNewSegment={newSegment}
        onCreateSegment={(segmentRef, data) => {
          createSegment(
            segmentRef, Object.assign({event_id: event.get('id')}, data)
          )
        }}
        onUpdateSegment={updateSegment}
        onDeleteSegment={deleteSegment}
        onRemoveNewSegment={removeNewSegment}
      />
      <EventActions></EventActions>
    </div>
  }
}

Show.title = i18n.t('backend.pages.elawa.events.show.title')
Show.path = '/backend/elawa/events/:eventId'

const mapStateToProps = (state, props) => {
  return {
    displayEventNameEdit: state.elawaEventsShow.get('displayNameEdit'),
    event: state.elawaEventsShow.get('event'),
    newSegments: state.elawaEventsShow.get('newSegments'),
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    finishEventNameEdit(id, name) {
      dispatch(actions.finishNameEdit(id, name))
    },
    showEventNameEdit() { dispatch(actions.showNameEdit()) },
    fetchEvent(id) { dispatch(actions.fetchEvent(id)) },
    updateEventStatus(id, status) {
      dispatch(actions.updateStatus(id, status))
    },
    newSegment() { dispatch(actions.newSegment()) },
    showSegmentNameEdit(index) { dispatch(actions.showSegmentNameEdit(index)) },
    hideSegmentNameEdit(index) { dispatch(actions.hideSegmentNameEdit(index)) },
    updateSegment: (id, data) => dispatch(actions.updateSegment(id, data)),
    createSegment(segmentRef, data) {
      dispatch(actions.createSegment(segmentRef, data))
    },
    deleteSegment(id) { dispatch(actions.deleteSegment(id)) },
    removeNewSegment: (segment) => dispatch(actions.removeNewSegment(segment)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)
