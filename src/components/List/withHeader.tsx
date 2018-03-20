import * as React from 'react';
import { AddItemInput } from '../AddItemInput';
import { Panel } from 'react-bootstrap';

export const withHeader = (WrappedComponent: React.StatelessComponent) => (props: any) => (
  <>
    <Panel.Heading>
      <AddItemInput />
    </Panel.Heading>
    <WrappedComponent {...props} />
  </>
);
