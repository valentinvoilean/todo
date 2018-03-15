import * as React from 'react';
import { Well, Checkbox, Button } from 'react-bootstrap';
import * as cx from 'classnames';

import './Item.css';

export interface ToDoItem {
  id: number;
  text: string;
  isSelected: boolean;
}

export interface ItemProps {
  todo: ToDoItem;
  handleDelete?: () => void;
  handleSelect?: () => void;
}

export const Item: React.SFC<ItemProps> = props => {
  const { todo, handleDelete, handleSelect } = props;
  const classNames = cx({ 'todo__item--completed': todo && todo.isSelected });

  return (
    <li className="todo__item">
      <Well bsSize="small" className="todo__itemContent">
        <Checkbox inline={true} className={classNames} onChange={handleSelect}>
          {todo && todo.text}
        </Checkbox>
        <Button onClick={handleDelete}>Delete</Button>
      </Well>
    </li>
  );
};

Item.defaultProps = {
  handleDelete() {},
  handleSelect() {}
};
