import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from 'actions/elawaSegmentPerformancesActionCreators'
import {List} from 'immutable'

import PerformersTable from './PerformersTable'
import PerformanceSessions from './PerformanceSessions'
import UserSearchSelect from '#/Users/UserSearchSelect'
// import css from './SegmentPerformances.scss'

const FilterInput = (props) => (
  <div>Filter</div>
)

class SegmentPerformances extends BaseComponent {

  static propTypes = {
    segmentId: React.PropTypes.number,
  }

  componentDidMount() {
    this.props.actions.fetchSegment({id: this.props.params.segmentId})
    this.props.actions.fetchLocations()
  }

  _filteredPerformances = () => {
    return this.props.data.getIn(['segment', 'performances']) || new List()
  }

  _addUser = (userId) => {
    this.props.actions.createPerformance({
      segmentId: this.props.data.getIn(['segment', 'id']),
      performerId: userId,
    })
  }

  _deletePerformance = (performanceId) => {
    this.props.actions.deletePerformance(performanceId)
  }

  _updateLocation = (performance, locationId) => {
    const {updatePerformance} = this.props.actions
    let performanceObj = performance.toObject()
    performanceObj['location_id'] = locationId
    updatePerformance(performanceObj)
  }


  render() {
    return <div>
      {(this.props.data.get('showSessionsOfPerformance')) ?
        <PerformanceSessions
          performance={this.props.data.get('showSessionsOfPerformance')}
        />
        : ''
      }
      <FilterInput />
      <PerformersTable
        performances={this._filteredPerformances()}
        deletePerformance={this._deletePerformance}
        updateLocation={this._updateLocation}
        locations={this.props.data.get('locations')}
        onPerformanceClick={this.props.actions.showPerformanceSessions}
      />
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
