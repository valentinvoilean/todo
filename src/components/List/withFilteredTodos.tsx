import { mapProps } from 'recompose';

import { ToDoItemState } from '../../ducks/toDo';

export interface FilteredTodosProps {
  pathname: string;
  todos: ToDoItemState[];
}

const filterTodos = ({ todos, pathname }: FilteredTodosProps) => {
  switch (pathname) {
    case '/active':
      return todos.filter(todo => todo.isSelected === false);
    case '/completed':
      return todos.filter(todo => todo.isSelected === true);
    default:
      return todos;
  }
};

export const withFilteredTodos = mapProps(({ pathname, todos, ...rest }: FilteredTodosProps) => ({
  filteredTodos: filterTodos({ todos, pathname }),
  ...rest
}));
