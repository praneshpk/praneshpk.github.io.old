import React from 'react';
import ReactDOM from 'react-dom';
import Games from '../Games';

it('renders without crashing', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Games />, root);
});
