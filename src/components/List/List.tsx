import * as React from 'react';
import { Panel } from 'react-bootstrap';

import { Item } from '../Item';

const props = {
  todo: { id: 1, text: 'test', isSelected: false },
  handleDelete() {},
  handleSelect() {},
  onCheckboxChange() {},
  onClickDeleteButton() {}
}; // TODO replace with redux

export const List = () => (
  <Panel.Body>
    <ul className="todo__list">
      <Item {...props} />
      <Item {...props} />
      <Item {...props} />
    </ul>
  </Panel.Body>
);
