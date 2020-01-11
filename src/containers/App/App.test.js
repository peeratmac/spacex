import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('APP', () => {
  it('should match the App Snapshot UI', () => {
    let wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
