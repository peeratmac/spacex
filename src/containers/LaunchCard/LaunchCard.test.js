import React from 'react';
import { shallow } from 'enzyme';
import { LaunchCard } from './LaunchCard';

describe('LAUNCH CARD', () => {
  it.skip('should match the LaunchCard Snapshot UI', () => {
    let wrapper = shallow(<LaunchCard launch={[]} saveFavorite={jest.fn()} />);

    expect(wrapper).toMatchSnapshot();
  });
});
