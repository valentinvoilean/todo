import * as React from 'react';
import { Panel } from 'react-bootstrap';

import { Item } from '../Item';
import { ToDoItemState } from '../../ducks/toDo';

export interface ListProps {
  todos: ToDoItemState[];
  handleDelete: (id: number) => void;
  handleSelect: (id: number) => void;
}

export const List: React.SFC<ListProps> = ({ todos, handleDelete, handleSelect }) => (
  <Panel.Body>
    <ul className="todo__list">
      {todos.map((todo, index) => (
        <Item
          key={`todo-${index}`}
          todo={todo}
          handleDelete={handleDelete}
          handleSelect={handleSelect}
        />
      ))}
    </ul>
  </Panel.Body>
);
