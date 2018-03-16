import { withHandlers } from 'recompose';

import { AddItemInputProps } from './AddItemInput';

export const withEventHandlers = withHandlers({
  createTodo: ({ text, addTodo, updateText }: AddItemInputProps) => (e: any) => {
    e.preventDefault();
    if (typeof text !== 'undefined') {
      addTodo(text);
      updateText('');
    }
  }
});
