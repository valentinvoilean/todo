import * as React from 'react';
import { Filters } from '../Filters';
import { Panel } from 'react-bootstrap';

export const withFooter = (WrappedComponent: any) => (props: any) => [
  <WrappedComponent {...props} key="todo-content" />,
  (
    <Panel.Footer key="todo-footer">
      <Filters />
    </Panel.Footer>
  )
];
