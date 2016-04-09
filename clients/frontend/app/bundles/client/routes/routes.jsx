import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../layout/Layout';
import Dashboard from '#/Dashboard/Dashboard'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute
      component={Dashboard}
    />
    <Route
      path="settings"
      component={Dashboard}
    />
  </Route>
);
