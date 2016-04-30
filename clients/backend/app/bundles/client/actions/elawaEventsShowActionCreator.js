import requestsManager from 'libs/requestsManager';
import * as actionTypes from '../constants/elawaEventShowActionTypes';

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
      .then((res) => dispatch(finishNameEditSuccess(res.data)))
      .catch((res) => dispatch(finishNameEditFailure(res.error)))
  }
}

export function finishNameEditSuccess(event) {
  return {
    type: actionTypes.FINISH_NAME_EDIT_SUCCESS,
    event
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
      .then((res) => dispatch(updateStatusSuccess(res.data)))
      .catch((res) => dispatch(updateStatusFailure(res.error)))
  }
}

export function updateStatusSuccess(event) {
  return {
    type: actionTypes.UPDATE_STATUS_SUCCESS,
    event,
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
      .then((res) => dispatch(fetchEventSuccess(res.data)))
      .catch((res) => dispatch(fetchEventFailure(res.error)))
  }
}

export function fetchEventSuccess(event) {
  return {
    type: actionTypes.FETCH_EVENT_SUCCESS,
    event,
  }
}

export function fetchEventFailure(error) {
  return {
    type: actionTypes.FETCH_EVENT_FAILURE,
    error,
  }
}
