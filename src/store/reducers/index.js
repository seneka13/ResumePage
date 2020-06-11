import { combineReducers } from 'redux'
import toggleMenu from './toggle'
import contactForm from './form'


export default combineReducers({
  toggle: toggleMenu,
  form: contactForm,
})
