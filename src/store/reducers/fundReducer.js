const initState = {
    items: []
}

const fundReducer = (state = initState, action ) => {
    switch (action.type) {
        case 'FETCH_FUNDS_SUCCESS':
            console.log('fetched', action.payload)
            return {items: action.payload}
        case 'FETCH_FUNDS_ERROR':
            console.log('error', action.error)
            return state;
        default:
            return state
    }
}

export default fundReducer