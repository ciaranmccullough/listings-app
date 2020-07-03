import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VenueMaker from './VenueMaker';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={VenueMaker} />
      <Route path='/venue/:venueId' component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
