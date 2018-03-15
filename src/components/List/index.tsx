import { List as SimpleList } from './List';
import { withHeader } from './withHeader';
import { withFooter } from './withFooter';
import { withLayout } from './withLayout';
import { compose } from 'recompose';

export const List = compose(
  withLayout,
  withHeader,
  withFooter
)(SimpleList);
