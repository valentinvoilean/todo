import * as React from 'react';
import { AddItemInput } from '../AddItemInput';
import { Panel } from 'react-bootstrap';

export const withHeader = (WrappedComponent: any) => (props: any) => [
  (
    <Panel.Heading key="todo-heading">
      <AddItemInput />
    </Panel.Heading>
  ),
  <WrappedComponent key="todo-body" {...props} />
];
