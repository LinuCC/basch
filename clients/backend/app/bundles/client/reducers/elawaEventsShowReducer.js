import Immutable from 'immutable';
import * as actionTypes from '../constants/elawaEventShowActionTypes'

export const defaultState = Immutable.fromJS({
  event: {name: '', status: ''},
  displayNameEdit: false
})

export default (state = defaultState, action = null) => {

  const {type, error} = action;

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
    default: {
      return state;
    }
  }
}
