import * as React from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton, Button } from 'react-bootstrap';

import './Filters.css';

import { ToDoItemState } from '../../ducks/toDo';

export interface FiltersProps {
  todos: ToDoItemState[];
  clearSelected: () => any;
}

export const Filters: React.SFC<FiltersProps> = ({ todos, clearSelected }) => {
  const itemsLeft = todos.filter(todo => todo.isSelected === false);

  return (
    <div className="todo__filters">
      <span>{itemsLeft.length} items left</span>
      <ButtonToolbar>
        <ToggleButtonGroup type="radio" name="options" defaultValue="all" >
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="active">Active</ToggleButton>
          <ToggleButton value="completed">Completed</ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
      <Button onClick={clearSelected}>Clear Completed</Button>
    </div>
  );
};
