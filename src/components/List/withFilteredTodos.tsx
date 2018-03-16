import { mapProps } from 'recompose';

import { ListProps } from './List';
import { ToDoItemState } from '../../ducks/toDo';

const filterTodos = (todos: ToDoItemState[], pathname: string) => {
  switch (pathname) {
    case '/active':
      return todos.filter(todo => todo.isSelected === false);
    case '/completed':
      return todos.filter(todo => todo.isSelected === true);
    case '/all':
    case '/':
    default:
      return todos;
  }
};

export const withFilteredTodos = mapProps(({ pathname, todos, ...rest }: ListProps) => ({
  filteredTodos: filterTodos(todos, pathname),
  ...rest
}));
