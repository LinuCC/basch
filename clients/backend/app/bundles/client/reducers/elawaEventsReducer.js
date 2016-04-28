import Immutable from 'immutable';
import * as actionTypes from '../constants/elawaEventsActionTypes'

export const defaultState = Immutable.fromJS({
  page: 0,
  showNewForm: false,
  events: []
})

export default (state = defaultState, action = null) => {

  const {type, error} = action;

  switch(type) {
    case actionTypes.TOGGLE_NEW_FORM: {
      const {isDisplayed} = action;
      return state.merge({
        showNewForm: isDisplayed
      })
    }
    case actionTypes.SUBMIT_NEW_EVENT_SUCCESS: {
      return state.merge({
        showNewForm: false
      })
    }
    case actionTypes.SUBMIT_NEW_EVENT_FAILURE: {
      return state.merge({
      })
    }
    case actionTypes.FETCH_EVENTS_SUCCESS: {
      const {events} = action
      return state.merge({
        events: events
      })
    }
    default: {
      return state;
    }
  }
}

