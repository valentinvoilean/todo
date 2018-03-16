import * as React from 'react';
import { shallow } from 'enzyme';
import { List } from './List';

describe('<List />', () => {
  const props = {
    todos: [],
    filteredTodos: [],
    handleDelete() {},
    handleSelect() {},
    pathname: '/'
  };

  it('renders without crashing', () => {
    shallow(<List {...props} />);
  });

  it('renders the list`', () => {
    const wrapper = shallow(<List {...props} />);
    expect(wrapper.find('ul').length).toBe(1);
  });
});
