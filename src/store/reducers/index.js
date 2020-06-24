import { combineReducers } from 'redux'
import toggle from './toggle'
import contactForm from './form'


export default combineReducers({
  toggle,
  form: contactForm,
})
