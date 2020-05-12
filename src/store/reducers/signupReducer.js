const initState = {
    id: "",
    email: "",
    password: ""
}

const signupReducer = (state = initState, action ) => {
    switch (action.type) {
        case 'CREATE_USER':
            console.log('SUCCESS', action.signup)
            return state;
        case 'CREATE_USER_ERROR':
            console.log('ERROR', action.error)
            return state;
        default:
            return state
    }
}

export default signupReducer