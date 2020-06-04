import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactList from './components/ContactList';
import ContactInfo from './components/ContactList/ContactInfo';

function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route path="ResumePage/" component={HomePage} exact/>
        <Route path="ResumePage/about" component={About} exact/>
        <Route path="ResumePage/resume" component={Resume} exact/>
        <Route path="ResumePage/contact" component={Contact} exact/>
        <Route path="ResumePage/portfolio" component={Portfolio} exact/>
        <Route path="ResumePage/portfolio/contact-list" component={ContactList} exact/>
        <Route path="ResumePage/portfolio/contact-list/:contactId" component={ContactInfo} exact/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;