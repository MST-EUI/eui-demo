import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-14';
import EuiDemo from '../src/';

Enzyme.configure({ adapter: new Adapter() });

test('EuiDemo should render correctly', () => {
  mount(<EuiDemo />);
});

test('EuiDemo props', () => {
  const EuiDemo = shallow(<EuiDemo className="test" />);
  expect(EuiDemo.find('.eui-empty-data-content')).toBeTruthy();
});

