import * as React from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton, Button } from 'react-bootstrap';

import './Filters.css';

export const Filters = () => (
  <div className="todo__filters">
    <span>0 items left</span>
    <ButtonToolbar>
      <ToggleButtonGroup type="radio" name="options" defaultValue="all" >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="active">Active</ToggleButton>
        <ToggleButton value="completed">Completed</ToggleButton>
      </ToggleButtonGroup>
    </ButtonToolbar>
    <Button>Clear Completed</Button>
  </div>
);
