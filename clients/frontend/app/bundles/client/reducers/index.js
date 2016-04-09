import userReducer from './userReducer';
import { defaultState as userState } from './userReducer';

export default {
  user: userReducer,
};

export const defaultStates = {
  user: userState,
};
