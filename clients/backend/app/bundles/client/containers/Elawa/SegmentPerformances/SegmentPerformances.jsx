import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from 'actions/elawaSegmentPerformancesActionCreators'

import PerformersTable from './PerformersTable'
import UserSearchSelect from '#/Users/UserSearchSelect'
// import css from './SegmentPerformances.scss'

const PerformerSessions = (props) => (
  <div>SESSIONS</div>
)

const FilterInput = (props) => (
  <div>Filter</div>
)

const UserSearch = (props) => (
  <div>Search</div>
)

export default class SegmentPerformances extends BaseComponent {

  static propTypes = {
    segmentId: React.PropTypes.number,
  }

  componentDidMount() {
    this.props.actions.fetchSegment({id: this.props.params.segmentId})
  }

  _filteredPerformances = () => {
    return this.props.data.getIn(['segment', 'performances'])
  }

  _addUser = (userId) => {
    console.warn(this.props.data)
    this.props.actions.createPerformance({
      segmentId: this.props.data.getIn(['segment', 'id']),
      userId: userId,
    })
  }

  render() {
    return <div>
      <PerformerSessions />
      <FilterInput />
      <PerformersTable performances={this._filteredPerformances()} />
      <UserSearchSelect onUserSelected={this._addUser} />
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
