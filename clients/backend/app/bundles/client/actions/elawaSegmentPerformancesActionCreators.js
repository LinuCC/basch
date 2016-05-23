import requestsManager from 'libs/requestsManager'
import * as actionTypes from '../constants/elawaSegmentPerformancesActionTypes'

export function fetchSegment(filter) {
  return (dispatch) => {
    return requestsManager.elawaSegments.fetch(filter)
      .then((res) => dispatch(fetchSegmentSuccess(res)))
      .catch((res) => dispatch(fetchSegmentFailure(res)))
  }
}

export function fetchSegmentSuccess(data) {
  return {
    type: actionTypes.FETCH_SEGMENT_SUCCESS,
    segment: data['bs/elawa/segment'],
  }
}

export function fetchSegmentFailure(error) {
  return {
    type: actionTypes.FETCH_SEGMENT_FAILURE,
    error,
  }
}

export function fetchPerformerSessions(data) {
  return (dispatch) => {
    return requestsManager.doSomething(data)
      .then((res) => dispatch(fetchPerformerSessionsSuccess(res)))
      .catch((res) => dispatch(fetchPerformerSessionsFailure(res.error)))
  }
}

export function fetchPerformerSessionsSuccess(data) {
  return {
    type: actionTypes.FETCH_PERFORMERS_SESSIONS_SUCCESS,
    sessions: data['bs/elawa/sessions'],
  }
}

export function fetchPerformerSessionsFailure(error) {
  return {
    type: actionTypes.FETCH_PERFORMERS_SESSIONS_FAILURE,
    error,
  }
}

export function createPerformance(performance) {
  return (dispatch) => {
    return requestsManager.elawaSegmentPerformances.create(performance)
      .then((res) => dispatch(createPerformanceSuccess(res)))
      .catch((res) => dispatch(createPerformanceFailure(res.error)))
  }
}

export function createPerformanceSuccess(data) {
  return {
    type: actionTypes.CREATE_PERFORMANCE_SUCCESS,
    performance: data['bs/elawa/segment_performance'],
  }
}

export function createPerformanceFailure(error) {
  return {
    type: actionTypes.CREATE_PERFORMANCE_FAILURE,
    error,
  }
}

export function deletePerformance(performanceId) {
  return (dispatch) => {
    return requestsManager.elawaSegmentPerformances.delete(performanceId)
      .then((res) => dispatch(deletePerformanceSuccess(res)))
      .catch((res) => dispatch(deletePerformanceFailure(res)))
  }
}

export function deletePerformanceSuccess(data) {
  return {
    type: actionTypes.DELETE_PERFORMANCE_SUCCESS,
    performance: data['bs/elawa/segment_performance'],
  }
}

export function deletePerformanceFailure(error) {
  return {
    type: actionTypes.DELETE_PERFORMANCE_FAILURE,
    error,
  }
}

export function fetchLocations(data) {
  return (dispatch) => {
    return requestsManager.doSomething(data)
      .then((res) => dispatch(fetchLocationsSuccess(res)))
      .catch((res) => dispatch(fetchLocationsFailure(res.error)))
  }
}

export function fetchLocationsSuccess(data) {
  return {
    type: actionTypes.FETCH_LOCATIONS_SUCCESS,
    rooms: data['bs/locations'],
  }
}

export function fetchLocationsFailure(error) {
  return {
    type: actionTypes.FETCH_LOCATIONS_FAILURE,
    error,
  }
}

export function updatePerformanceRoom(data) {
  return (dispatch) => {
    return requestsManager.doSomething(data)
      .then((res) => dispatch(updatePerformanceRoomSuccess(res)))
      .catch((res) => dispatch(updatePerformanceRoomFailure(res.error)))
  }
}

export function updatePerformanceRoomSuccess(data) {
  return {
    type: actionTypes.UPDATE_PERFORMANCE_ROOM_SUCCESS,
    performer: data['bs/elawa/performer'],
  }
}

export function updatePerformanceRoomFailure(error) {
  return {
    type: actionTypes.UPDATE_PERFORMANCE_ROOM_FAILURE,
    error,
  }
}
