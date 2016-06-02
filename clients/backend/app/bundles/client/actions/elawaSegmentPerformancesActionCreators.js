import requestsManager from 'libs/requestsManager'
import * as actionTypes from '../constants/elawaSegmentPerformancesActionTypes'

export const fetchSegment = (filter) => {
  return (dispatch) => {
    return requestsManager.elawaSegments.fetch(filter)
      .then((res) => dispatch(fetchSegmentSuccess(res)))
      .catch((res) => dispatch(fetchSegmentFailure(res)))
  }
}

export const fetchSegmentSuccess = (data) => ({
  type: actionTypes.FETCH_SEGMENT_SUCCESS,
  segment: data['bs/elawa/segment'],
})


export const fetchSegmentFailure = (error) => ({
  type: actionTypes.FETCH_SEGMENT_FAILURE,
  error,
})

export const fetchPerformerSessions = (data) => {
  return (dispatch) => {
    return requestsManager.doSomething(data)
      .then((res) => dispatch(fetchPerformerSessionsSuccess(res)))
      .catch((res) => dispatch(fetchPerformerSessionsFailure(res.error)))
  }
}

export const fetchPerformerSessionsSuccess = (data) => ({
  type: actionTypes.FETCH_PERFORMERS_SESSIONS_SUCCESS,
  sessions: data['bs/elawa/sessions'],
})

export const fetchPerformerSessionsFailure = (error) => ({
  type: actionTypes.FETCH_PERFORMERS_SESSIONS_FAILURE,
  error,
})

export const createPerformance = (performance) => {
  return (dispatch) => {
    return requestsManager.elawaSegmentPerformances.create(performance)
      .then((res) => dispatch(createPerformanceSuccess(res)))
      .catch((res) => dispatch(createPerformanceFailure(res.error)))
  }
}

export const createPerformanceSuccess = (data) => ({
  type: actionTypes.CREATE_PERFORMANCE_SUCCESS,
  performance: data['bs/elawa/segment_performance'],
})

export const createPerformanceFailure = (error) => ({
  type: actionTypes.CREATE_PERFORMANCE_FAILURE,
  error,
})

export const deletePerformance = (performanceId) => {
  return (dispatch) => {
    return requestsManager.elawaSegmentPerformances.delete(performanceId)
      .then((res) => dispatch(deletePerformanceSuccess(res)))
      .catch((res) => dispatch(deletePerformanceFailure(res)))
  }
}

export const deletePerformanceSuccess = (data) => ({
  type: actionTypes.DELETE_PERFORMANCE_SUCCESS,
  performance: data['bs/elawa/segment_performance'],
})

export const deletePerformanceFailure = (error) => ({
  type: actionTypes.DELETE_PERFORMANCE_FAILURE,
  error,
})

export const fetchLocations = () => {
  return (dispatch) => {
    return requestsManager.locations.fetch({})
      .then((res) => dispatch(fetchLocationsSuccess(res)))
      .catch((res) => dispatch(fetchLocationsFailure(res.error)))
  }
}

export const fetchLocationsSuccess = (data) => ({
  type: actionTypes.FETCH_LOCATIONS_SUCCESS,
  locations: data['bs/locations'],
})

export const fetchLocationsFailure = (error) => ({
  type: actionTypes.FETCH_LOCATIONS_FAILURE,
  error,
})

export const updatePerformance = (performance) => {
  return (dispatch) => {
    return requestsManager.elawaSegmentPerformances.update(performance)
      .then((res) => dispatch(updatePerformanceSuccess(res)))
      .catch((res) => dispatch(updatePerformanceFailure(res)))
  }
}

export const updatePerformanceSuccess = (data) => ({
  type: actionTypes.UPDATE_PERFORMANCE_SUCCESS,
  performance: data['bs/elawa/segment_performance'],
})

export const updatePerformanceFailure = (error) => ({
  type: actionTypes.UPDATE_PERFORMANCE_FAILURE,
  error,
})

export const showPerformanceSessions = (performance) => ({
  type: actionTypes.SHOW_PERFORMANCE_SESSIONS,
  performance
})

export const hidePerformanceSessions = (performance) => ({
  type: actionTypes.HIDE_PERFORMANCE_SESSIONS,
  performance
})
