import Immutable from 'immutable'
import * as actionTypes from '../constants/elawaSegmentPerformancesActionTypes'
import {byComparing} from './helpers'

export const defaultState = Immutable.fromJS({
  segment: {},
  sessions: [],
  locations: [],
})

export default (state = defaultState, action = null) => {

  const {type, error} = action

  switch(type) {
    case actionTypes.FETCH_SEGMENT_SUCCESS: {
      return state.merge({
        segment: action.segment
      })
    }
    case actionTypes.FETCH_PERFORMERS_SESSIONS_SUCCESS: {
      return state.merge({
        sessions: action.sessions
      })
    }
    case actionTypes.CREATE_PERFORMANCE_SUCCESS: {
      const {performance} = action
      return state.merge({
        segment: state.get('segment').update('performances', (perf) => (
          perf.push(Immutable.fromJS(performance))
        ))
      })
    }
    case actionTypes.DELETE_PERFORMANCE_SUCCESS: {
      const {performance} = action
      const performancePos = state.getIn(['segment', 'performances'])
        .findKey(byComparing(performance['id']))
      return state.merge({
        segment: state.get('segment').update('performances', (perf) => (
          perf.delete(performancePos)
        ))
      })
    }
    case actionTypes.FETCH_LOCATIONS_SUCCESS: {
      const {locations} = action
      return state.merge({
        locations: locations
      })
    }
    case actionTypes.UPDATE_PERFORMANCE_LOCATION_SUCCESS: {
      const location = action.location
      const locationPos = state.getIn(['segment', 'performances', ])

      return state.merge({
        locations: 'ADD ME LOLOLOL'
      })
    }
    default: {
      return state
    }
  }
}
