export interface ToDoItemState {
  readonly id: number;
  readonly text: string;
  readonly isSelected: boolean;
}

export const initialState: ToDoItemState[] = [];

export enum Type {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  SELECT_TODO = 'SELECT_TODO',
  CLEAR_SELECTED = 'CLEAR_SELECTED'
}

export const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Type.ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((max, todo) => Math.max(todo.id || 1, max), 0) + 1,
          text: action.text,
          isSelected: false
        }
      ];
    case Type.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case Type.SELECT_TODO:
      return state.map(
        todo => (todo.id === action.id ? { ...todo, isSelected: !todo.isSelected } : todo)
      );
    case Type.CLEAR_SELECTED:
      return state.filter((todo) => todo.isSelected === false);
    default:
      return state;
  }
};

export namespace TodoActions {
  export const addTodo = (text: string) => ({ type: Type.ADD_TODO, text });
  export const deleteTodo = (id: number) => ({ type: Type.DELETE_TODO, id });
  export const selectTodo = (id: number) => ({ type: Type.SELECT_TODO, id });
  export const clearSelected = () => ({ type: Type.CLEAR_SELECTED });
}
