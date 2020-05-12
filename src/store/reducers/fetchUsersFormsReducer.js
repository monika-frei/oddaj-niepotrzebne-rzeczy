const initState = {
    forms: []
}

const fetchUsersFormsReducer = (state = initState, action ) => {
    switch (action.type) {
        case 'FETCH_FORMS_SUCCESS':
            console.log('fetched', action.payload)
            return {items: action.payload}
        case 'FETCH_FORMS_ERROR':
            console.log('error', action.error)
            return state;
        default:
            return state
    }
}

export default fetchUsersFormsReducer