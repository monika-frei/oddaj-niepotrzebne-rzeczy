const initState = {
    quantity: 1
}

const formStepTwoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'STEP_TWO':
           return {
               ...state,
               quantity: action.quantity
           }
        default:
            return state;
    }
 }

export default formStepTwoReducer