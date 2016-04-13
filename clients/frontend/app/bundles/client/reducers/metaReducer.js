import Immutable from 'immutable';

export const defaultState = Immutable.fromJS({
  meta: {
    notifications: null,
    csrfToken: null
  }
});

export default (state = defaultState, action = null) => {

  const {type, user, error} = action;

  switch(type) {
    default: {
      return state;
    }
  }
}
