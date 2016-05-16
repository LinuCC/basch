import React from 'react';
import { Route, IndexRoute, DefaultRoute } from 'react-router';
import Layout from '../layout/Layout';
import Dashboard from 'containers/Dashboard/Dashboard'
import EventsIndex from 'containers/Elawa/Events/Index'
import EventsShow from 'containers/Elawa/Events/Show'
import SegmentPerformances from 'containers/Elawa/SegmentPerformances/SegmentPerformances'

// TODO Actually translate the route-names
export default (serverHtml) => {
  // Adds a default-path so that the react-router does render the layout even
  // if the route was not found.
  // This means that the server can render to serverHtml for routes we dont
  // need components for.
  return (
    <Route name='Backend'
      path="/backend"
      serverHtml={serverHtml || ''}
      component={Layout}
    >
      <IndexRoute component={Dashboard} />
      <Route name='Elawa' path="elawa" component={EventsIndex} />
      <Route name='Events' path="elawa/events" component={EventsIndex} />
      <Route name='Event anzeigen' path="elawa/events/:eventId"
        component={EventsShow}
      />
      <Route name='Lehrer' path="elawa/segments/:segmentId"
        component={SegmentPerformances}
      />
      <Route name='Benutzer' path="users">
        <Route name='Benutzer erstellen' path="new" />
        <Route name='Benutzer bearbeiten' path=":userId/edit" />
        <Route name='Benutzer anzeigen' path=":userId" />
      </Route>
      <Route name='Klassen' path="grades">
        <Route name='Klasse erstellen' path="new" />
        <Route name='Klasse bearbeiten' path=":gradeId/edit" />
        <Route name='Klassen anzeigen' path=":gradeId" />
      </Route>
      <Route name='Räume' path="locations">
        <Route name='Raum erstellen' path="new" />
        <Route name='Raum bearbeiten' path=":locationId/edit" />
        <Route name='Räume anzeigen' path=":locationId" />
      </Route>
      <Route path="*" />
    </Route>
  )
}
