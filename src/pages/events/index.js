import React, { lazy } from 'react';
import { Route, Switch } from 'react-router';

const List = lazy(() => import('./list'));
const Details = lazy(() => import('./details'));
const Edit = lazy(() => import('./edit'));

export default function Events({ match: { path } }) {
  return (
    <Switch>
      <Route path={`${path}/:id/edit`} component={Edit} />
      <Route path={`${path}/:id`} component={Details} />
      <Route exact path={path} component={List} />
    </Switch>
  );
}
