import requestsManager from 'libs/requestsManager';
import * as actionTypes from '../constants/elawaEventsActionTypes';

export function toggleNewForm(isDisplayed) {
  return {
    type: actionTypes.TOGGLE_NEW_FORM,
    isDisplayed,
  }
}

export function setNewFormIsSaving() {
  return {
    type: actionTypes.SET_NEW_FORM_IS_SAVING,
  }
}

export function submitNewEvent(event) {
  return (dispatch) => {
    dispatch(setNewFormIsSaving())
    return requestsManager.elawaEvents.create(event)
      .then((res) => dispatch(submitNewEventSuccess(res.data)))
      .catch((res) => dispatch(submitNewEventFailure(res.error)))
  }
}

export function submitNewEventSuccess(event) {
  return {
    type: actionTypes.SUBMIT_NEW_EVENT_SUCCESS,
    event
  }
}

export function submitNewEventFailure(error) {
  return {
    type: actionTypes.SUBMIT_NEW_EVENT_FAILURE,
    error: error,
  }
}

export function fetchEvents() {
  return (dispatch) => {
    return requestsManager.elawaEvents.all()
      .then((res) => dispatch(fetchEventsSuccess(res.data)))
      .catch((res) => dispatch(fetchEventsFailure(res.error)))
  }
}

export function fetchEventsSuccess(events) {
  return {
    type: actionTypes.FETCH_EVENTS_SUCCESS,
    events
  }
}

export function fetchEventsFailure(error) {
  return {
    type: actionTypes.FETCH_EVENTS_FAILURE,
    error
  }
}

export function deleteEvent(eventId) {
  return (dispatch) => {
    return requestsManager.elawaEvents.delete(eventId)
      .then((res) => dispatch(deleteEventSuccess(res.data)))
      .catch((res) => dispatch(deleteEventFailure(res.error)))
  }
}

export function deleteEventSuccess(event) {
  return {
    type: actionTypes.DELETE_EVENT_SUCCESS,
    event
  }
}

export function deleteEventFailure(error) {
  return {
    type: actionTypes.DELETE_EVENT_FAILURE,
    error
  }
}
