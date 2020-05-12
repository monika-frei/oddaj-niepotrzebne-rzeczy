const initState = {
    thingsToDonate: []
}

const formStepOneReducer = (state = initState, action) => {
    switch (action.type) {
        case 'STEP_ONE':
           return {
               ...state,
               thingsToDonate: [...action.thingsToDonate]
           }
        default:
            return state;
    }
 }

export default formStepOneReducer
