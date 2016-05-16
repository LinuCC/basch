import requestsManager from 'libs/requestsManager'
import * as actionTypes from '../constants/elawaSegmentPerformancesActionTypes'

export function fetchSegment(filter) {
  return (dispatch) => {
    return requestsManager.elawaSegments.fetch(filter)
      .then((res) => dispatch(fetchSegmentSuccess(res.data)))
      .catch((res) => dispatch(fetchSegmentFailure(res)))
  }
}

export function fetchSegmentSuccess(segment) {
  return {
    type: actionTypes.FETCH_SEGMENT_SUCCESS,
    segment,
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
      .then((res) => dispatch(fetchPerformerSessionsSuccess(res.data)))
      .catch((res) => dispatch(fetchPerformerSessionsFailure(res.error)))
  }
}

export function fetchPerformerSessionsSuccess(data) {
  return {
    type: actionTypes.FETCH_PERFORMERS_SESSIONS_SUCCESS,
    data,
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
      .then((res) => dispatch(createPerformanceSuccess(res.data)))
      .catch((res) => dispatch(createPerformanceFailure(res.error)))
  }
}

export function createPerformanceSuccess(data) {
  return {
    type: actionTypes.CREATE_PERFORMANCES_SUCCESS,
    data,
  }
}

export function createPerformanceFailure(error) {
  return {
    type: actionTypes.CREATE_PERFORMANCES_FAILURE,
    error,
  }
}

export function fetchRooms(data) {
  return (dispatch) => {
    return requestsManager.doSomething(data)
      .then((res) => dispatch(fetchRoomsSuccess(res.data)))
      .catch((res) => dispatch(fetchRoomsFailure(res.error)))
  }
}

export function fetchRoomsSuccess(data) {
  return {
    type: actionTypes.FETCH_ROOMS_SUCCESS,
    data,
  }
}

export function fetchRoomsFailure(error) {
  return {
    type: actionTypes.FETCH_ROOMS_FAILURE,
    error,
  }
}

export function updatePerformerRoom(data) {
  return (dispatch) => {
    return requestsManager.doSomething(data)
      .then((res) => dispatch(updatePerformerRoomSuccess(res.data)))
      .catch((res) => dispatch(updatePerformerRoomFailure(res.error)))
  }
}

export function updatePerformerRoomSuccess(data) {
  return {
    type: actionTypes.UPDATE_PERFORMANCES_ROOM_SUCCESS,
    data,
  }
}

export function updatePerformerRoomFailure(error) {
  return {
    type: actionTypes.UPDATE_PERFORMANCES_ROOM_FAILURE,
    error,
  }
}
