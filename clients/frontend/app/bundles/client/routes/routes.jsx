import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../layout/Layout';
import Dashboard from '#/Dashboard/Dashboard'
import Settings from 'containers/Settings'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute
      component={Settings}
    />
    <Route
      path="settings"
      component={Settings}
    />
  </Route>
);
