const initState = {
        street: "",
        city: "",
        postalCode: "",
        telNumber: "",
        date: "",
        time: "",
        info: ""
}

const formStepFourReducer = (state = initState, action) => {
    switch (action.type) {
        case 'STEP_FOUR_STREET':
           return {
               ...state,
                street: action.street
           }
        case 'STEP_FOUR_CITY':
            return {
                ...state,
                city: action.city
            }
        case 'STEP_FOUR_POSTALCODE':
            return {
                ...state,
                postalCode: action.postalCode
        }
        case 'STEP_FOUR_TELNUMBER':
            return {
                ...state,
                telNumber: action.telNumber
        }
        case 'STEP_FOUR_DATE':
            return {
                ...state,
                date: action.date
        }
        case 'STEP_FOUR_TIME':
            return {
                ...state,
                time: action.time
        }
        case 'STEP_FOUR_INFO':
            return {
                ...state,
                info: action.info
        }
        default:
            return state;
    }              
}

export default formStepFourReducer