import React from 'react';
import ReactDOM from 'react-dom';
import Projects from '../Projects';

it('renders without crashing', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Projects />, root);
});
