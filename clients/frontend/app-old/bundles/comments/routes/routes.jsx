import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../layout/Layout';

import Dashboard from '#/Dashboard/Dashboard'

// import TestReactRouter from '../components/TestReactRouter/TestReactRouter';
// import TestReactRouterRedirect from '../components/TestReactRouterRedirect/TestReactRouterRedirect';
// import RouterCommentsContainer from '../containers/RouterCommentsContainer';

export default (
  <Route path="/" component={Layout}
    onEnter={console.warn('Frontend: Check for user-auth!')}>
    <IndexRoute
      component={Dashboard}
    />
    <Route
      path="settings"
      component={Dashboard}
    />
    <Route
      path="elawa"
      {/*component={TestReactRouterRedirect}*/}
      {/*onEnter={TestReactRouterRedirect.checkAuth}*/}
    />
  </Route>
);
