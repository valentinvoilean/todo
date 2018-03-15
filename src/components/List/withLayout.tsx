import * as React from 'react';
import { Panel } from 'react-bootstrap';

import './List.css';

export const withLayout = (WrappedComponent: any) => (props: any) => (
  <Panel bsStyle="primary" className="todo__layout">
    <WrappedComponent {...props} />
  </Panel>
);
