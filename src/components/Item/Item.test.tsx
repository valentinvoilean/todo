import * as React from 'react';
import { shallow } from 'enzyme';
import { Item } from './Item';
import { Checkbox, Button } from 'react-bootstrap';

describe('<List />', () => {
  const defaultProps = {
    todo: { id: 1, text: 'test', isSelected: false },
    handleDelete() {},
    handleSelect() {},
    onCheckboxChange() {},
    onClickDeleteButton() {}
  };

  it('renders without crashing', () => {
    shallow(<Item {...defaultProps} />);
  });

  describe('Checkbox', () => {
    it('renders without crashing`', () => {
      const wrapper = shallow(<Item {...defaultProps} />);
      expect(wrapper.find(Checkbox)).toHaveLength(1);
    });

    it('displays the label cut if the isDisabled option is true', () => {
      const props = {...defaultProps, todo: {...defaultProps.todo, isSelected: true}};
      const wrapper = shallow(<Item {...props} />);
      expect(wrapper.find(Checkbox).props().className === 'todo__item--completed').toBeTruthy();

      const wrapper2 = shallow(<Item {...defaultProps} />);
      expect(wrapper2.find(Checkbox).props().className === 'todo__item--completed').toBeFalsy();
    });
  });

  describe('Delete button', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Item {...defaultProps} />);
      expect(wrapper.find(Button)).toHaveLength(1);
    });

    it('calls the onClickDeleteButton fuction once it\'s clicked', () => {
      const props = {
        ...defaultProps,
        onClickDeleteButton: jest.fn()
      };

      const wrapper = shallow(<Item {...props} />);
      wrapper.find(Button).simulate('click');

      expect(props.onClickDeleteButton).toHaveBeenCalled();
    });

  });
});
