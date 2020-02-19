import React from 'react';
import ReactDOM from 'react-dom';
import Profile from '../Profile';

it('renders without crashing', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Profile />, root);
});
