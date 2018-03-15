import * as React from 'react';

import { List } from '../List';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './App.css';

const logo = require('./logo.svg');

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ToDo App</h1>
        </header>
        <div className="App-intro">
          <List />
        </div>
      </div>
    );
  }
}
