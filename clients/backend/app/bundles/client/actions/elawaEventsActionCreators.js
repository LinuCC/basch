import requestsManager from 'libs/requestsManager';
import * as actionTypes from '../constants/elawaEventsActionTypes';

export function toggleNewForm(isDisplayed) {
  return {
    type: actionTypes.TOGGLE_NEW_FORM,
    isDisplayed,
  }
}
