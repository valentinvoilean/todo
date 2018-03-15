import * as React from 'react';
import { shallow } from 'enzyme';
import { List } from './List';

describe('<List />', () => {
  it('renders without crashing', () => {
    shallow(<List />);
  });

  it('renders the list`', () => {
    const wrapper = shallow(<List />);
    expect(wrapper.find('ul').length).toBe(1);
  });
});
