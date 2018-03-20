import * as React from 'react';
import { Filters } from '../Filters';
import { Panel } from 'react-bootstrap';

export const withFooter = (WrappedComponent: React.StatelessComponent) => (props: any) => (
  <>
    <WrappedComponent {...props} />
    <Panel.Footer>
      <Filters />
    </Panel.Footer>
  </>
);
