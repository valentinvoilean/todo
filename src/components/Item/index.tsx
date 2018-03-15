import * as React from 'react';
import { Well, Checkbox, Button } from 'react-bootstrap';

import './Item.css';

export const Item = () => (
  <li className="todo__item">
    <Well bsSize="small" className="todo__itemContent">
      <Checkbox inline={true} >Item Preview</Checkbox>
      <Button>Delete</Button>
    </Well>
  </li>
);
