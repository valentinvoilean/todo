import * as React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

export const AddItemInput = () => (
  <FormGroup>
    <FormControl type="text" placeholder="New ToDo Item" />
  </FormGroup>
);
