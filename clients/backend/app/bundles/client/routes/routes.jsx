import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../layout/Layout';
import Dashboard from 'containers/Dashboard/Dashboard'

export default (serverHtml) => {
  return (
    <Route path="/backend" serverHtml={serverHtml || ''} component={Layout}>
      <IndexRoute component={Dashboard} />
    </Route>
  )
}
