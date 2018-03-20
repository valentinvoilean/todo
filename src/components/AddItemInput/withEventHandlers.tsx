import { withHandlers } from 'recompose';

import { AddItemInputProps } from './AddItemInput';

export const withEventHandlers = withHandlers({
  createTodo: ({ text, addTodo, updateText }: AddItemInputProps) => (e: Event) => {
    e.preventDefault();
    if (typeof text !== 'undefined') {
      addTodo(text);
      updateText('');
    }
  }
});
