import Immutable from 'immutable'
import * as actionTypes from '../constants/elawaSegmentPerformancesActionTypes'

export const defaultState = Immutable.fromJS({
  rooms: [],
  segment: {},
  sessions: [],
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
      console.warn(performance)
      return state.merge({
        segment: state.get('segment').update('performances', (perf) => (
          perf.push(Immutable.fromJS(performance))
        ))
      })
    }
    case actionTypes.FETCH_ROOMS_SUCCESS: {
      return state.merge({
        rooms: action.rooms
      })
    }
    case actionTypes.UPDATE_PERFORMANCES_ROOM_SUCCESS: {
      const room = action.room
      const roomPos = state.getIn(['segment', 'performances', ])

      return state.merge({
        rooms: 'ADD ME LOLOLOL'
      })
    }
    default: {
      return state
    }
  }
}
