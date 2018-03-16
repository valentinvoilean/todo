import { TodoActions, Type, todoReducer } from './toDo';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'test';
    const expectedAction = { type: Type.ADD_TODO, text };
    expect(TodoActions.addTodo(text)).toEqual(expectedAction);
  });

  it('should create an action to delete a todo', () => {
    const id = 1;
    const expectedAction = { type: Type.DELETE_TODO, id };
    expect(TodoActions.deleteTodo(id)).toEqual(expectedAction);
  });

  it('should create an action to select a todo', () => {
    const id = 1;
    const expectedAction = { type: Type.SELECT_TODO, id };
    expect(TodoActions.selectTodo(id)).toEqual(expectedAction);
  });

  it('should create an action to clear all selected todos', () => {
    const expectedAction = { type: Type.CLEAR_SELECTED };
    expect(TodoActions.clearSelected()).toEqual(expectedAction);
  });
});

describe('Todo reducer', () => {
  it('should return the initial state', () => {
    expect(todoReducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_TODO', () => {
    expect(
      todoReducer([], {
        type: Type.ADD_TODO,
        text: 'test'
      })
    ).toEqual([
      {
        id: 1,
        text: 'test',
        isSelected: false
      }
    ]);

    expect(
      todoReducer(
        [
          {
            id: 1,
            text: 'test',
            isSelected: false
          }
        ],
        {
          type: Type.ADD_TODO,
          text: 'test2'
        }
      )
    ).toEqual([
      {
        id: 1,
        text: 'test',
        isSelected: false
      },
      {
        id: 2,
        text: 'test2',
        isSelected: false
      }
    ]);
  });

  it('should handle DELETE_TODO', () => {
    expect(
      todoReducer(
        [
          {
            id: 1,
            text: 'test',
            isSelected: false
          }
        ],
        {
          type: Type.DELETE_TODO,
          id: 1
        }
      )
    ).toEqual([]);
  });

  it('should handle SELECT_TODO', () => {
    expect(
      todoReducer(
        [
          {
            id: 1,
            text: 'test',
            isSelected: false
          }
        ],
        {
          type: Type.SELECT_TODO,
          id: 1
        }
      )
    ).toEqual([
      {
        id: 1,
        text: 'test',
        isSelected: true
      }
    ]);
  });

  it('should handle CLEAR_SELECTED', () => {
    expect(
      todoReducer(
        [
          {
            id: 1,
            text: 'test',
            isSelected: true
          },
          {
            id: 2,
            text: 'test2',
            isSelected: false
          }
        ],
        {
          type: Type.CLEAR_SELECTED
        }
      )
    ).toEqual([
      {
        id: 2,
        text: 'test2',
        isSelected: false
      }
    ]);
  });
});
