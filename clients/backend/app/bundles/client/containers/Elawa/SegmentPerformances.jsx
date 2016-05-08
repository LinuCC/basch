import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from 'actions/elawaSegmentPerformancesActionCreators'

// import css from './SegmentPerformances.scss'

const PerformerSessions = (props) => (
  <div>SESSIONS</div>
)

const FilterInput = (props) => (
  <div>Filter</div>
)

const PerformersTable = (props) => (
  <div>Tabelle</div>
)

const UserSearch = (props) => (
  <div>Search</div>
)

export default class SegmentPerformances extends BaseComponent {
  render() {
    return <div>
      <PerformerSessions />
      <FilterInput />
      <PerformersTable />
      <UserSearch />
    </div>
  }
}

const mapStateToProps = (state, props) => {
  return {data: state.elawaSegmentPerformances}
}

const mapDispatchToProps = (dispatch, props) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(SegmentPerformances)
