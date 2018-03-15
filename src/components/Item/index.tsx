import { Item as ToDoItem } from './Item';
import { withEventHandlers } from './withEventHandlers';

export const Item = withEventHandlers(ToDoItem);
