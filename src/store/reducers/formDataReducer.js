import { combineReducers } from 'redux'
import formStepOneReducer from "./formReducers/formStepOneReducer"
import formStepTwoReducer from "./formReducers/formStepTwoReducer"
import formStepThreeReducer from "./formReducers/formStepThreeReducer"
import formStepFourReducer from "./formReducers/formStepFourReducer"

const formDataReducer = combineReducers({

    thingsToDonate: formStepOneReducer,
    quantity: formStepTwoReducer,
    localization: formStepThreeReducer,
    toWho: formStepThreeReducer,
    organization: formStepThreeReducer,
    street: formStepFourReducer,
    city: formStepFourReducer,
    postalCode: formStepFourReducer,
    telNumber: formStepFourReducer,
    date: formStepFourReducer,
    time: formStepFourReducer,
    info: formStepFourReducer
})

export default formDataReducer