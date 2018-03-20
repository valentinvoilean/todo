import * as React from 'react';
import { Panel } from 'react-bootstrap';

import './List.css';

export const withLayout = (WrappedComponent: React.StatelessComponent) => (props: any) => (
  <Panel bsStyle="primary" className="todo__layout">
    <WrappedComponent {...props} />
  </Panel>
);
