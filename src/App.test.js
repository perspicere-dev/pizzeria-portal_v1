import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashings', () => {
  shallow(<App />);
});