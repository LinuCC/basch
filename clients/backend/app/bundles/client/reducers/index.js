import userReducer from './userReducer';
import { defaultState as userState } from './userReducer';
import metaReducer, { defaultState as metaState } from './metaReducer';
import elawaEventsReducer, { defaultState as elawaEventsState } from './elawaEventsReducer.js';

export default {
  user: userReducer,
  meta: metaReducer,
  elawaEvents: elawaEventsReducer,
};

export const defaultStates = {
  user: userState,
  meta: metaState,
  elawaEvents: elawaEventsState,
};
