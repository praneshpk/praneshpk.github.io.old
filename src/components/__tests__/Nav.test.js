import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../Nav';

it('renders without crashing', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Nav />, root);
});

it('updates the anchor', () => {
  const anchors = ['one', 'two', 'three'];
  const nav = <Nav anchors={anchors} />;
});
