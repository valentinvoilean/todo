import * as React from 'react';
import { Well, Checkbox, Button } from 'react-bootstrap';
import * as cx from 'classnames';

import './Item.css';

import { ToDoItemState } from '../../ducks/toDo';

export interface ItemProps {
  todo: ToDoItemState;
  onCheckboxChange: () => void;
  onClickDeleteButton: () => void;
  handleDelete: (id: number) => void;
  handleSelect: (id: number) => void;
}

export const Item: React.SFC<ItemProps> = props => {
  const { todo, onClickDeleteButton, onCheckboxChange } = props;
  const classNames = cx({ 'todo__item--completed': todo && todo.isSelected });

  return (
    <li className="todo__item">
      <Well bsSize="small" className="todo__itemContent">
        <Checkbox
          inline={true}
          className={classNames}
          onChange={onCheckboxChange}
          checked={todo && todo.isSelected}
        >
          {todo && todo.text}
        </Checkbox>
        <Button onClick={onClickDeleteButton}>Delete</Button>
      </Well>
    </li>
  );
};
