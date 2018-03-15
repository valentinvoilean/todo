import * as React from 'react';
import { shallow } from 'enzyme';
import { Item } from './Item';
import { Checkbox, Button } from 'react-bootstrap';

describe('<List />', () => {
  it('renders without crashing', () => {
    const props = {todo: { id: 1, text: 'test', isSelected: false }};
    shallow(<Item {...props} />);
  });

  describe('Checkbox', () => {
    it('renders without crashing`', () => {
      const props = {todo: { id: 1, text: 'test', isSelected: false }};
      const wrapper = shallow(<Item {...props} />);
      expect(wrapper.find(Checkbox)).toHaveLength(1);
    });

    it('displays the label cut if the isDisabled option is true', () => {
      const props = {todo: { id: 1, text: 'test', isSelected: true }};
      const wrapper = shallow(<Item {...props} />);
      expect(wrapper.find(Checkbox).props().className === 'todo__item--completed').toBeTruthy();

      const props2 = {todo: { id: 1, text: 'test', isSelected: false }};
      const wrapper2 = shallow(<Item {...props2} />);
      expect(wrapper2.find(Checkbox).props().className === 'todo__item--completed').toBeFalsy();
    });
  });

  describe('Delete button', () => {
    it('renders without crashing', () => {
      const props = {todo: { id: 1, text: 'test', isSelected: false }};
      const wrapper = shallow(<Item {...props} />);
      expect(wrapper.find(Button)).toHaveLength(1);
    });

    it('calls the handleDelete fuction once it\'s clicked', () => {
      const props = {
        todo: { id: 1, text: 'test', isSelected: false },
        handleDelete: jest.fn()

      };

      const wrapper = shallow(<Item {...props} />);
      wrapper.find(Button).simulate('click');

      expect(props.handleDelete).toHaveBeenCalled();
    });

  });
});
