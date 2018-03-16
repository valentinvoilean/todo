import { List as SimpleList } from './List';
import { withRedux } from './withRedux';
import { withHeader } from './withHeader';
import { withFooter } from './withFooter';
import { withLayout } from './withLayout';
import { withFilteredTodos } from './withFilteredTodos';
import { compose } from 'recompose';

export const List = compose(
  withRedux,
  withFilteredTodos,
  withLayout,
  withHeader,
  withFooter
)(SimpleList);
