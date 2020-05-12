const initState = {
    users: []
}

const usersReducer = (state = initState, action ) => {
    switch (action.type) {
        case 'FETCH_USERS_SUCCESS':
            console.log('fetched users')
            return {items: action.payload}
        case 'FETCH_USERS_ERROR':
            console.log('error', action.error)
            return state;
        default:
            return state
    }
}

export default usersReducer