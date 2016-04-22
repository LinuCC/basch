import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'libs/middlewares/loggerMiddleware';
import { routerReducer } from 'react-router-redux';
import reducers, { defaultStates } from '../reducers';
import Immutable from 'immutable'
import _ from 'lodash'

export default (props) => {

  const initialState = _.mapValues(defaultStates, (state, stateName) => {
    return (props[stateName]) ? state.merge(props[stateName]) : state
  })

  // https://github.com/reactjs/react-router-redux
  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  });

  // Sync dispatched route actions to the history
  const finalCreateStore = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware),
    (typeof window !== 'undefined' && window.devToolsExtension) ? window.devToolsExtension() : f => f
  )(createStore);

  return finalCreateStore(reducer, initialState);
};
