import * as React from 'react';
import { Panel } from 'react-bootstrap';

import { Item } from '../Item';

export const List = () => (
  <Panel.Body>
    <ul className="todo__list">
      <Item label="test" />
      <Item label="test" />
      <Item label="test" />
    </ul>
  </Panel.Body>
);
