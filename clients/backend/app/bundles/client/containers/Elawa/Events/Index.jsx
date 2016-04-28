import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {connect} from 'react-redux'
import {MenuItem} from 'react-bootstrap-4'
import i18n from 'i18n-js'
import Icon from 'react-fontawesome'
import {Link} from 'react-router'
import * as actions from 'actions/elawaEventsActionCreators'

import NewForm from '#/Elawa/Events/NewForm'
import DropdownLink from '#/DropdownLink'
import NewModelCard from '#/Index/NewModelCard'
import {Sidebar, SidebaredContent} from '#/Layout'
import Card, {CardBlock, CardHeader} from 'libs/components/Bootstrap/Card/Card'
import ModelTable from '#/Index/ModelTable'
// import css from './Index.scss'

export default class Index extends BaseComponent {

  componentDidMount() {
    this.props.fetchEvents()
  }

  _eventRowOptions = (event) => {
    return <DropdownLink link={<Icon name='cog' size='lg' />}>
      <Link 
        id={`dropdown-event_actions_${event.get('id')}`}
        to={`/backend/elawa/events/${event.get('id')}`} 
        className='dropdown-item'>
        Dashboard
      </Link>
    </DropdownLink>
  }

  _newForm = () => {
    if(!this.props.showNewForm) {
      return ''
    }
    else {
      return <NewForm 
        onCancelled={this.props.cancelNewEvent} 
        onConfirmed={(event) => this.props.submitNewEvent(event).then(this.props.fetchEvents())}
      />
    }
  }

  render() {
    return <div>
      <Sidebar>
        <NewModelCard onClick={() => this.props.newEventClick()}>
          {i18n.t('helpers.submit.new', {
              model: i18n.t('activerecord.models.bs/elawa/event')
          })}
        </NewModelCard>
      </Sidebar>
      <SidebaredContent>
        {this._newForm()}
        <ModelTable
          cardHeader={i18n.t('backend.elawa.events.events_list')}
          columns={{name: 'Name', tableRowCustomColumn: 'Optionen'}}
          rows={this.props.events}
          customColumn={this._eventRowOptions} />
      </SidebaredContent>
    </div>
  }
}

const mapStateToProps = (state, props) => {
  const {elawaEvents} = state
  return {
    showNewForm: elawaEvents.get('showNewForm'),
    events: elawaEvents.get('events'),
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    newEventClick() { dispatch(actions.toggleNewForm(true)) },
    cancelNewEvent() { dispatch(actions.toggleNewForm(false)) },
    submitNewEvent(event) { return dispatch(actions.submitNewEvent(event)) },
    fetchEvents() { dispatch(actions.fetchEvents()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
