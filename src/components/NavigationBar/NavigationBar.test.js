import React from 'react';
import { shallow } from 'enzyme';
import { NavigationBar } from './NavigationBar';

describe('NAVIGATION BAR', () => {
  it('should match the Navigation Bar Snapshot UI', () => {
    let wrapper = shallow(<NavigationBar />);

    expect(wrapper).toMatchSnapshot();
  });
});
