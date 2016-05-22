import requestsManager from 'libs/requestsManager'
import * as actionTypes from '../constants/elawaEventShowActionTypes'

export function changeEvent() {
  return {
    type: actionTypes.CHANGE_EVENT,
  }
}

export function changeEventSuccess() {
  return {
    type: actionTypes.CHANGE_EVENT_SUCCESS,
  }
}

export function changeEventFailure() {
  return {
    type: actionTypes.CHANGE_EVENT_FAILURE,
  }
}

export function showNameEdit() {
  return {
    type: actionTypes.SHOW_NAME_EDIT,
  }
}

export function hideNameEdit() {
  return {
    type: actionTypes.HIDE_NAME_EDIT,
  }
}

export function finishNameEdit(id, name) {
  return (dispatch) => {
    return requestsManager.elawaEvents.update(id, {name})
      .then((res) => dispatch(finishNameEditSuccess(res)))
      .catch((res) => dispatch(finishNameEditFailure(res.error)))
  }
}

export function finishNameEditSuccess(data) {
  return {
    type: actionTypes.FINISH_NAME_EDIT_SUCCESS,
    event: data['bs/elawa/event']
  }
}

export function finishNameEditFailure(error) {
  return {
    type: actionTypes.FINISH_NAME_EDIT_FAILURE,
  }
}

export function updateStatus(id, status) {
  return (dispatch) => {
    return requestsManager.elawaEvents.update(id, {status})
      .then((res) => dispatch(updateStatusSuccess(res)))
      .catch((res) => dispatch(updateStatusFailure(res.error)))
  }
}

export function updateStatusSuccess(data) {
  return {
    type: actionTypes.UPDATE_STATUS_SUCCESS,
    event: data['bs/elawa/event'],
  }
}

export function updateStatusFailure(error) {
  return {
    type: actionTypes.UPDATE_STATUS_FAILURE,
    error,
  }
}

export function fetchEvent(eventId) {
  return (dispatch) => {
    return requestsManager.elawaEvents.find(eventId)
      .then((res) => dispatch(fetchEventSuccess(res)))
      .catch((res) => dispatch(fetchEventFailure(res)))
  }
}

export function fetchEventSuccess(data) {
  return {
    type: actionTypes.FETCH_EVENT_SUCCESS,
    event: data['bs/elawa/event'],

  }
}

export function fetchEventFailure(error) {
  return {
    type: actionTypes.FETCH_EVENT_FAILURE,
    error,
  }
}

// SEGMENTS

export function newSegment() {
  return {
    type: actionTypes.NEW_SEGMENT,
  }
}

export function showSegmentNameEdit(segmentId) {
  return {
    type: actionTypes.SHOW_SEGMENT_NAME_EDIT,
    segmentId
  }
}

export function hideSegmentNameEdit(segmentId) {
  return {
    type: actionTypes.HIDE_SEGMENT_NAME_EDIT,
    segmentId
  }
}

export function updateSegment(segment) {
  return (dispatch) => {
    return requestsManager.elawaSegments.update(segment.id, segment)
      .then((res) => dispatch(updateSegmentSuccess(res)))
      .catch((res) => dispatch(updateSegmentFailure(res.error)))
  }
}

export function updateSegmentSuccess(data) {
  return {
    type: actionTypes.UPDATE_SEGMENT_SUCCESS,
    segment: data['bs/elawa/segment'],
  }
}

export function updateSegmentFailure(error) {
  return {
    type: actionTypes.UPDATE_SEGMENT_FAILURE,
    error,
  }
}

export function createSegment(segmentRef, data) {
  return (dispatch) => {
    return requestsManager.elawaSegments.create(data)
      .then((res) => dispatch(createSegmentSuccess(segmentRef, res)))
      .catch((res) => dispatch(createSegmentFailure(res)))
  }
}

export function createSegmentSuccess(segmentRef, data) {
  return {
    type: actionTypes.CREATE_SEGMENT_SUCCESS,
    segmentRef,
    segment: data['bs/elawa/segment'],
  }
}

export function createSegmentFailure(error) {
  return {
    type: actionTypes.CREATE_SEGMENT_FAILURE,
    error,
  }
}

export function deleteSegment(segmentId) {
  return (dispatch) => {
    return requestsManager.elawaSegments.delete(segmentId)
      .then((res) => dispatch(deleteSegmentSuccess(segmentId)))
      .catch((res) => dispatch(deleteSegmentFailure(res.error)))
  }
}

export function deleteSegmentSuccess(segmentId) {
  return {
    type: actionTypes.DELETE_SEGMENT_SUCCESS,
    segmentId,
  }
}

export function deleteSegmentFailure(error) {
  return {
    type: actionTypes.DELETE_SEGMENT_FAILURE,
    error,
  }
}

export function removeNewSegment(segment) {
  return {
    type: actionTypes.REMOVE_NEW_SEGMENT,
    segment
  }
}
