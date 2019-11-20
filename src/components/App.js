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
  const anchors = ['About', 'Games', 'Design', 'Music', 'Projects'];
  return (
    <HashRouter>
      <div className="App">
        <Profile anchors={anchors} />
        <div className="panels">
          <About />
          <Games />
          <Design />
          <Music />
          <Projects />
        </div>
      </div>
    </HashRouter>
  );
}
