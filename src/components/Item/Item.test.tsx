import * as React from 'react';
import { shallow } from 'enzyme';
import { Item } from './Item';
import { Checkbox, Button } from 'react-bootstrap';

describe('<List />', () => {
  it('renders without crashing', () => {
    shallow(<Item label="test" />);
  });

  describe('Checkbox', () => {
    it('renders without crashing`', () => {
      const wrapper = shallow(<Item label="test" />);
      expect(wrapper.find(Checkbox)).toHaveLength(1);
    });

    it('displays the label cut if the isDisabled option is true', () => {
      const wrapper = shallow(<Item label="test" isDisabled={true} />);
      expect(wrapper.find('.todo__item--completed')).toHaveLength(1);

      const wrapper2 = shallow(<Item label="test" isDisabled={false} />);
      expect(wrapper2.find('.todo__item--completed')).toHaveLength(0);
    });
  });

  describe('Delete button', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Item label="test" />);
      expect(wrapper.find(Button)).toHaveLength(1);
    });

    it('calls the handleDelete fuction once it\'s clicked', () => {
      const handleDelete = jest.fn();
      const wrapper = shallow(<Item label="test" handleDelete={handleDelete} />);
      wrapper.find(Button).simulate('click');

      expect(handleDelete).toHaveBeenCalled();
    });

  });
});
