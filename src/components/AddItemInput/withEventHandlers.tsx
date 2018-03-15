import { withHandlers } from 'recompose';

export const withEventHandlers = withHandlers({
  createTodo: ({ text, addTodo, updateText }: any) => (e: any) => {
    e.preventDefault();
    if (typeof text !== 'undefined') {
      addTodo(text);
      updateText('');
    }
  }
});
