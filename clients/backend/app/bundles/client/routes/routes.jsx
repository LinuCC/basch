import React from 'react';
import { Route, IndexRoute, DefaultRoute } from 'react-router';
import Layout from '../layout/Layout';
import Dashboard from 'containers/Dashboard/Dashboard'

export default (serverHtml) => {
  return (
    <Route path="/backend" serverHtml={serverHtml || ''} component={Layout}>
      <IndexRoute component={Dashboard} />
      <Route path="*" />
    </Route>
  )
}
