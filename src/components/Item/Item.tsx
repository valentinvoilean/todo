import * as React from 'react';
import { Well, Checkbox, Button } from 'react-bootstrap';
import * as cx from 'classnames';

import './Item.css';

export interface ItemProps {
  label: string;
  isDisabled?: boolean;
  handleDelete?: () => void;
  handleSelect?: () => void;
}

export const Item: React.SFC<ItemProps> = props => {
  const { label, isDisabled, handleDelete, handleSelect } = props;
  const classNames = cx({ 'todo__item--completed': isDisabled });

  return (
    <li className="todo__item">
      <Well bsSize="small" className="todo__itemContent">
        <Checkbox inline={true} className={classNames} onClick={handleSelect}>
          {label}
        </Checkbox>
        <Button onClick={handleDelete}>Delete</Button>
      </Well>
    </li>
  );
};

Item.defaultProps = {
  isDisabled: false,
  handleDelete() {},
  handleSelect() {}
};
