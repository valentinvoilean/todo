import { withState, compose } from 'recompose';

import { AddItemInput as StatelessInput } from './AddItemInput';
import { withRedux } from './withRedux';
import { withEventHandlers } from './withEventHandlers';

export const AddItemInput = compose(
  withRedux,
  withState('text', 'updateText', ''),
  withEventHandlers
)(StatelessInput);
