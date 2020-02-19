import React from 'react';
import ReactDOM from 'react-dom';
import About from '../About';

it('renders without crashing', () => {
  const root = document.createElement('div');
  ReactDOM.render(<About />, root);
});
