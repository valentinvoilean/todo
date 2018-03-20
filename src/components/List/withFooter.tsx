import * as React from 'react';
import { Filters } from '../Filters';
import { Panel } from 'react-bootstrap';

export const withFooter = (WrappedComponent: any) => (props: any) => (
  <>
    <WrappedComponent {...props} />
    <Panel.Footer>
      <Filters />
    </Panel.Footer>
  </>
);
