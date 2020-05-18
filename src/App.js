import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/About/index'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={About} exact/>
      <Route path="/resume" component={Resume} exact/>
      <Route path="/contact" component={Contact} exact/>
      <Route path="/portfolio" component={Portfolio} exact/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
