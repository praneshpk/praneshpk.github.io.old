import React from 'react';
import ReactDOM from 'react-dom';
import Music from '../Music';

it('renders without crashing', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Music />, root);
});
