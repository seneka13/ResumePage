import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import ContactList from './components/ContactList'
import ContactInfo from './components/ContactList/ContactInfo'

function App() {
  return (
    <BrowserRouter basename="/ResumePage">
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={About} exact />
        <Route path="/resume" component={Resume} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/portfolio" component={Portfolio} exact />
        <Route path="/portfolio/contact-list" component={ContactList} exact />
        <Route path="/portfolio/contact-list/:contactId" component={ContactInfo} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App
