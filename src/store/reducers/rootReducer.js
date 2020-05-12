import { combineReducers } from 'redux'
import sendFormReducer from './sendFormReducer'
import fundReducer from './fundReducer'
import signupReducer from './signupReducer'
import contactFormReducer from './contactFormReducer'
import usersReducer from './usersReducer'
import loggedUserReducer from './loggedUserReducer'
import logOutUserReducer from './logOutUserReducer'
import formDataReducer from './formDataReducer'
import fetchUsersFormsReducer from './fetchUsersFormsReducer'


const rootReducer = combineReducers({
    
    sendForm: sendFormReducer,
    items: fundReducer,
    signup: signupReducer,
    formData: formDataReducer,
    sendContactForm: contactFormReducer,
    users: usersReducer,
    loggedUser: loggedUserReducer,
    logOutUser: logOutUserReducer,
    forms: fetchUsersFormsReducer
})
export default rootReducer