const initState = {
    name: "",
    email: "",
    message: ""
}


const contactFormReducer = (state = initState, action ) => {
    switch (action.type) {
        case 'SEND_CONTACT_FORM':
            console.log('send form', action.form)
            return state;
        case 'SEND_CONTACT_FORM_ERROR':
            console.log('send error', action.error)
            return state;
        default:
            return state
    }
}

export default contactFormReducer