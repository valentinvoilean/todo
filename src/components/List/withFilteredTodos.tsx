import * as React from 'react';

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

export const withFilteredTodos = (WrappedComponent: any) => (props: ListProps) => {
  const { pathname, todos } = props;
  const filteredTodos: ToDoItemState[] = filterTodos(todos, pathname);

  return (
    <WrappedComponent {...props} filteredTodos={filteredTodos} />
  );
};
