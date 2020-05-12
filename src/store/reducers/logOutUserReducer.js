const initState = {
    email: ""
}

const logOutUserReducer = (state = initState, action ) => {
    switch (action.type) {
        case 'LOGGED_OUT_USER':
            return action.user = ""
        default:
            return state
    }
}

export default logOutUserReducer