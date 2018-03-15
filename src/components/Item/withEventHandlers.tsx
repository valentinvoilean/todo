import { withHandlers } from 'recompose';
import { ItemProps } from './Item';

export const withEventHandlers = withHandlers({
  onCheckboxChange: ({ todo, handleSelect }: ItemProps) => () => todo.id && handleSelect(todo.id),
  onClickDeleteButton: ({ todo, handleDelete }: ItemProps) => () => todo.id && handleDelete(todo.id),
});