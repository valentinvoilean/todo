import * as React from 'react';
import { Route, Switch } from 'react-router';
import { App as TodoApp } from './App';

export const App = () => (
  <Switch>
    <Route path="/" component={TodoApp} />
  </Switch>
);
