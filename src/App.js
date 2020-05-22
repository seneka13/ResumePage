import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import ContactList from './components/ContactList';

function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route path="/" component={About} exact/>
        <Route path="/resume" component={Resume} exact/>
        <Route path="/contact" component={Contact} exact/>
        <Route path="/portfolio" component={Portfolio} exact/>
        <Route path="/portfolio/contact-list" component={ContactList} exact/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
