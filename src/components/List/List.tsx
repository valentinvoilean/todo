import * as React from 'react';
import { Panel } from 'react-bootstrap';

import { Item } from '../Item';
import { ToDoItemState } from '../../ducks/toDo';

export interface ListProps {
  filteredTodos: ToDoItemState[];
  handleDelete: (id: number) => void;
  handleSelect: (id: number) => void;
}

export const List: React.SFC<ListProps> = ({ filteredTodos, handleDelete, handleSelect }) => {
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
