import { combineReducers, Reducer } from 'redux';
import { RootState } from './state';
import { routerReducer, RouterState } from 'react-router-redux';
import { todoReducer } from '../ducks/toDo';

export { RootState, RouterState };

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  router: routerReducer,
  todos: todoReducer
});
