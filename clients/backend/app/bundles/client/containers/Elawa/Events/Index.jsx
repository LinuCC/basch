import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {connect} from 'react-redux'
import {MenuItem} from 'react-bootstrap-4'
import i18n from 'i18n-js'
import Icon from 'react-fontawesome'
import {Link} from 'react-router'
import {toggleNewForm} from 'actions/elawaEventsActionCreators'

import NewForm from '#/Elawa/Events/NewForm'
import DropdownLink from '#/DropdownLink'
import NewModelCard from '#/Index/NewModelCard'
import {Sidebar, SidebaredContent} from '#/Layout'
import Card, {CardBlock, CardHeader} from 'libs/components/Bootstrap/Card/Card'
import ModelTable from '#/Index/ModelTable'
// import css from './Index.scss'

export default class Index extends BaseComponent {

  _eventRowOptions = (event) => {
    return <DropdownLink link={<Icon name='cog' size='lg' />}>
      <Link 
        id={`dropdown-event_actions_${event.id}`}
        to={`/backend/elawa/events/${event.id}`} 
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
      return <NewForm onCancelled={() => this.props.cancelNewEvent()} />
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
          rows={[{name: 'schinken'}, {name: 'barsch'}]}
          customColumn={this._eventRowOptions} />
      </SidebaredContent>
    </div>
  }
}

const mapStateToProps = (state, props) => {
  const {elawaEvents} = state
  return {
    showNewForm: elawaEvents.get('showNewForm')
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    newEventClick() { dispatch(toggleNewForm(true)) },
    cancelNewEvent() { dispatch(toggleNewForm(false)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
