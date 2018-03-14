import * as React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { List } from '../List';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders the Logo`', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-logo').length).toBe(1);
  });

  it('renders the <List /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(List).length).toBe(1);
  });
});
