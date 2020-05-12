const initState = {
    toWho: "",
    organization: "",
    localization: ""
}

const formStepThreeReducer = (state = initState, action) => {
        switch (action.type) {
            case 'STEP_THREE_LOCALIZATION':
               return {
                   ...state,
                   localization: action.localization,
               }
            case 'STEP_THREE_TOWHO':
                return {
                    ...state,
                    toWho: action.toWho
                }
            case 'STEP_THREE_ORGANIZATION':
                return {
                    ...state,
                    organization: action.organization
                }
            default:
                return state;
        }              
}

export default formStepThreeReducer



