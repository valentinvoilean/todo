import * as React from 'react';
import { shallow } from 'enzyme';
import { Item } from './Item';

describe('<List />', () => {
  it('renders without crashing', () => {
    shallow(<Item />);
  });
});
