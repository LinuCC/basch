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
    default: {
      return state;
    }
  }
}

