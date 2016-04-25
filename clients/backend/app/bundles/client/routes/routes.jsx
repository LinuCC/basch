import React from 'react';
import { Route, IndexRoute, DefaultRoute } from 'react-router';
import Layout from '../layout/Layout';
import Dashboard from 'containers/Dashboard/Dashboard'
import EventsIndex from 'containers/Elawa/Events/Index'

export default (serverHtml) => {
  // Adds a default-path so that the react-router does render the layout even
  // if the route was not found.
  // This means that the server can render to serverHtml for routes we dont
  // need components for.
  return (
    <Route path="/backend" serverHtml={serverHtml || ''} component={Layout}>
      <IndexRoute component={Dashboard} />
      <Route path="elawa" component={EventsIndex} />
      <Route path="*" />
    </Route>
  )
}
