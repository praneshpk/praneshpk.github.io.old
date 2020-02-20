import React from 'react';
import { HashRouter } from 'react-router-dom';
import Design from './Design';
import Music from './Music';
import Projects from './Projects';
import About from './About';
import Nav from './Nav';

import './App.scss';

export default function App() {
  const anchors = [
    About, Projects, Design, Music,
  ];
  return (
    <HashRouter>
      <div className="App">
        <Nav anchors={anchors.map((e) => e.name)} />
        <div className="panels">
          {anchors.map((e) => React.createElement(e, { key: e.toString() }))}
        </div>
      </div>
    </HashRouter>
  );
}
