import * as React from 'react';
import { Well, Checkbox, Button } from 'react-bootstrap';
import * as cx from 'classnames';

import './Item.css';

export const Item = () => (
  <li className="todo__item">
    <Well bsSize="small" className="todo__itemContent">
      <Checkbox inline={true} className={cx('todo__item--completed')}>
        Item Preview
      </Checkbox>
      <Button>Delete</Button>
    </Well>
  </li>
);
