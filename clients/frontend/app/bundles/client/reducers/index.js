import userReducer from './userReducer';
import { defaultState as userState } from './userReducer';
import metaReducer, { defaultState as metaState } from './metaReducer';

export default {
  user: userReducer,
  meta: metaReducer,
};

export const defaultStates = {
  user: userState,
  meta: metaState,
};
