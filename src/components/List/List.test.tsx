import * as React from 'react';
import { shallow } from 'enzyme';
import { List } from './List';
import { AddItemInput } from '../AddItemInput';

describe('<List />', () => {
  it('renders without crashing', () => {
    shallow(<List />);
  });

  it('renders the <AddItemInput />`', () => {
    const wrapper = shallow(<List />);
    expect(wrapper.find(AddItemInput).length).toBe(1);
  });
});
