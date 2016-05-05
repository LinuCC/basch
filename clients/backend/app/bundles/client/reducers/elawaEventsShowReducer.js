import Immutable, {Map} from 'immutable';
import * as actionTypes from '../constants/elawaEventShowActionTypes'

export const defaultState = Immutable.fromJS({
  event: {name: '', status: '', segments: []},
  displayNameEdit: false,
  newSegments: [],
  uniqueIndex: 0,
})

export default (state = defaultState, action = null) => {

  const {type, error, segmentId, segment} = action;

  switch(type) {
    case actionTypes.SHOW_NAME_EDIT: {
      return state.merge({
        displayNameEdit: true
      })
    }
    case actionTypes.HIDE_NAME_EDIT: {
      return state.merge({
        displayNameEdit: false
      })
    }
    case actionTypes.FETCH_EVENT_SUCCESS: {
      return state.merge({
        event: Immutable.fromJS(action.event)
      })
    }
    case actionTypes.FINISH_NAME_EDIT_SUCCESS: {
      return state.merge({
        displayNameEdit: false,
        event: action.event
      })
    }
    case actionTypes.UPDATE_STATUS_SUCCESS: {
      return state.merge({
        event: action.event
      })
    }
    case actionTypes.NEW_SEGMENT: {
      return state.merge({
        newSegments: state.get('newSegments').push(Map(
          {'_tempId': state.get('uniqueIndex')}
        )),
        uniqueIndex: state.get('uniqueIndex') + 1,
      })
    }
    case actionTypes.REMOVE_NEW_SEGMENT: {
      return state.merge({
        newSegments: state.get('newSegments').delete(
          state.get('newSegments').findKey((seg) => seg === segment)
        )
      })
    }
    case actionTypes.SHOW_SEGMENT_NAME_EDIT: {
      const byId = (segment) => { return segment.get('id') == segmentId }
      const segmentPos = state.getIn(['event', 'segments']).findKey(byId)
      return state.merge({
        event: state.get('event').setIn(
          ['segments', segmentPos, 'displayEditName'], true
        )
      })
    }
    case actionTypes.HIDE_SEGMENT_NAME_EDIT: {
      const byId = (segment) => { return segment.get('id') == segmentId }
      const segmentPos = state.getIn(['event', 'segments']).findKey(byId)
      return state.merge({
        event: state.get('event').setIn(
          ['segments', segmentPos, 'displayEditName'], false
        )
      })
    }
    case actionTypes.UPDATE_SEGMENT_SUCCESS: {
      const byId = (stateSeg) => {
        return stateSeg.get('id') == segment.id
      }
      const segmentPos = state.getIn(['event', 'segments']).findKey(byId)
      return state.merge({
        event: state.get('event').setIn(
          ['segments', segmentPos], Immutable.fromJS(segment)
        )
      })
    }
    case actionTypes.CREATE_SEGMENT_SUCCESS: {
      const {segmentRef} = action
      const newSegmentIndex = state.get('newSegments').keyOf(segmentRef)

      return state.merge({
        newSegments: state.get('newSegments').delete(newSegmentIndex),
        event: state.get('event').update('segments', (segments) => {
          return segments.push(Immutable.fromJS(segment))
        })
      })
    }
    case actionTypes.DELETE_SEGMENT_SUCCESS: {
      const byId = (segment) => segment.get('id') == segmentId
      const segmentPos = state.getIn(['event', 'segments']).findKey(byId)
      return state.merge({
        event: state.get('event').update('segments', (segments) => {
          return segments.delete(segmentPos)
        })
      })
    }
    default: {
      return state;
    }
  }
}
