import { compose } from 'recompose';
import { withRouter } from 'react-router';

import { Filters as StatelessFilters } from './Filters';
import { withRedux } from './withRedux';
import { withEventHandlers } from './withEventHandlers';

export const Filters = compose(withRedux, withRouter, withEventHandlers)(StatelessFilters);
