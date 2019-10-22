import React, { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const Events = lazy(() => import('./events'));

export default function Pages() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/events" component={Events} />
        <Route exact path="/" component={() => <Redirect to="/events" />} />
      </Switch>
    </BrowserRouter>
  );
}
