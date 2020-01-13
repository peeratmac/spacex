import React from 'react';
import { shallow } from 'enzyme';
import { LaunchPads } from './LaunchPads';

describe('LAUNCH PADS', () => {
  it('should match the LaunchPads Snapshot UI', () => {
    let wrapper = shallow(<LaunchPads />);

    expect(wrapper).toMatchSnapshot();
  });
});
