import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Games from './Games';
import Design from './Design';
import Music from './Music';
import Projects from './Projects';
import About from './About';
import Profile from './Profile';

import './App.scss';

export default function App() {
  return (
    <HashRouter>
      <div className="App">
        <Profile />
        <Route path="/" component={About} />
        <Route path="/games" component={Games} />
        <Route path="/design" component={Design} />
        <Route path="/music" component={Music} />
        <Route path="/learn" component={Projects} />
      </div>
    </HashRouter>
  );
}
