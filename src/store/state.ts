import { RouterState } from 'react-router-redux';
import { ToDoItemState } from '../ducks/toDo';

export interface RootState {
  router: RouterState;
  todos: ToDoItemState[];
}
