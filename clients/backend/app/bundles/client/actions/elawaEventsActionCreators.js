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
      .then((res) => dispatch(submitNewEventSuccess(res)))
      .catch((res) => dispatch(submitNewEventFailure(res)))
  }
}

export function submitNewEventSuccess(data) {
  return {
    type: actionTypes.SUBMIT_NEW_EVENT_SUCCESS,
    event: data['bs/elawa/event'],
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
      .then((res) => dispatch(fetchEventsSuccess(res)))
      .catch((res) => dispatch(fetchEventsFailure(res)))
  }
}

export function fetchEventsSuccess(data) {
  return {
    type: actionTypes.FETCH_EVENTS_SUCCESS,
    events: data['bs/elawa/events'],
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
      .then((res) => dispatch(deleteEventSuccess(res)))
      .catch((res) => dispatch(deleteEventFailure(res.error)))
  }
}

export function deleteEventSuccess(data) {
  return {
    type: actionTypes.DELETE_EVENT_SUCCESS,
    event: data['bs/elawa/event'],
  }
}

export function deleteEventFailure(error) {
  return {
    type: actionTypes.DELETE_EVENT_FAILURE,
    error
  }
}
