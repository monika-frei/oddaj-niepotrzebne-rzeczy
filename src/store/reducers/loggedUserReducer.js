const initState = {
    email: ""
}

const loggedUserReducer = (state = initState, action ) => {
    switch (action.type) {
        case 'LOGGED_USER':
            return action.user
        case 'LOGGED_OUT_USER':
            return action.user= initState
        default:
            return state
    }
}

export default loggedUserReducer