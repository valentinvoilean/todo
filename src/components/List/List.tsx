import * as React from 'react';
import { Panel } from 'react-bootstrap';

import { Item } from '../Item';

export const List = () => (
  <Panel.Body>
    <ul className="todo__list">
      <Item />
      <Item />
      <Item />
    </ul>
  </Panel.Body>
);
