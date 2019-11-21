import React from 'react';
import { HashRouter } from 'react-router-dom';
import Games from './Games';
import Design from './Design';
import Music from './Music';
import Projects from './Projects';
import About from './About';
import Profile from './Profile';

import './App.scss';

export default function App() {
  const anchors = {
    About, Projects, Games, Design, Music,
  };
  return (
    <HashRouter>
      <div className="App">
        <Profile anchors={Object.keys(anchors)} />
        <div className="panels">
          {Object.values(anchors).map((e) => React.createElement(e, {}))}
        </div>
      </div>
    </HashRouter>
  );
}
