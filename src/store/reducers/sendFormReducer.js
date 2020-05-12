const initState = {
    thingsToDonate: [],
    quantity: 1,
    localization: "",
    toWho: "",
    organization: "",
    userInfo: {
        street: "",
        city: "",
        postalCode: "",
        telNumber: "",
        date: "",
        time: "",
        info: ""
    }
}

const sendFormReducer = (state = initState, action ) => {
    switch (action.type) {
        case 'SEND_FORM':
            console.log('send form', action.form)
            return state;
        case 'SEND_FORM_ERROR':
            console.log('send error', action.error)
            return state;
        default:
            return state
    }
}

export default sendFormReducer