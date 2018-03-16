import * as React from 'react';
import { Panel } from 'react-bootstrap';

import { Item } from '../Item';
import { ToDoItemState } from '../../ducks/toDo';

export interface ListProps {
  todos: ToDoItemState[];
  filteredTodos: ToDoItemState[];
  handleDelete: (id: number) => void;
  handleSelect: (id: number) => void;
  pathname: string;
}

export const List: React.SFC<ListProps> = ({ filteredTodos, handleDelete, handleSelect, pathname }) => {
  return (
    <Panel.Body>
      <ul className="todo__list">
        {filteredTodos.map((todo, index) => (
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
};
