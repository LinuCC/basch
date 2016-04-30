import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {connect} from 'react-redux'
import * as actions from 'actions/elawaEventsShowActionCreator'

import EventHeader from '#/Elawa/Events/EventHeader'

// import css from './Show.scss'
const SegmentsForm = (props) => {
  return <div>Segments</div>
}
const EventActions = (props) => {
  return <div>Actions</div>
}

export default class Show extends BaseComponent {

  componentDidMount() {
    this.props.fetchEvent(this.props.params.eventId)
  }

  render() {
    return <div>
      <EventHeader
        event={this.props.event}
        showNameEdit={this.props.showEventNameEdit}
        displayNameEdit={this.props.displayEventNameEdit}
        finishNameEdit={
          (name) => this.props.finishEventNameEdit(
            this.props.event.get('id'), name
          )
        }
        updateStatus={
          (status) => this.props.updateStatus(
            this.props.event.get('id'), status
          )
        }
      />
      <SegmentsForm></SegmentsForm>
      <EventActions></EventActions>
    </div>
  }
}

const mapStateToProps = (state, props) => {
  return {
    displayEventNameEdit: state.elawaEventsShow.get('displayNameEdit'),
    event: state.elawaEventsShow.get('event'),
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    finishEventNameEdit(id, name) {
      dispatch(actions.finishNameEdit(id, name))
    },
    showEventNameEdit() { dispatch(actions.showNameEdit()) },
    fetchEvent(id) { dispatch(actions.fetchEvent(id)) },
    updateStatus(id, status) {
      dispatch(actions.updateStatus(id, status))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)
