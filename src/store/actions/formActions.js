export const formStepOne = thingsToDonate => ({
    type: 'STEP_ONE',
    thingsToDonate
})

export const formStepTwo = quantity => ({
    type: 'STEP_TWO',
    quantity
})

export const formStepThreeLocalization = (localization) => ({
    type: 'STEP_THREE_LOCALIZATION',
    localization
})

export const formStepThreeToWho = (toWho) => ({
    type: 'STEP_THREE_TOWHO',
    toWho
})

export const formStepThreeOrganization = (organization ) => ({
    type: 'STEP_THREE_ORGANIZATION',
    organization

})

export const formStepFourStreet = street => ({
    type: 'STEP_FOUR_STREET',
    street

})

export const formStepFourCity = city => ({
    type: 'STEP_FOUR_CITY',
    city

})

export const formStepFourPostalCode = postalCode => ({
    type: 'STEP_FOUR_POSTALCODE',
    postalCode
})

export const formStepFourTelNumber = telNumber => ({
    type: 'STEP_FOUR_TELNUMBER',
    telNumber
})

export const formStepFourDate = date => ({
    type: 'STEP_FOUR_DATE',
    date
})

export const formStepFourTime = time => ({
    type: 'STEP_FOUR_TIME',
    time
})

export const formStepFourInfo = info => ({
    type: 'STEP_FOUR_INFO',
    info
})



export function sendForm(form) {
    return function(dispatch) {
        return fetch("http://localhost:3005/forms", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(form)
                })
                .then((resp) => resp.json())
                .then(()=> dispatch({type: 'SEND_FORM', form}))  // warunek sukces błąd
                .catch(error => dispatch({type:'SEND_FORM_ERROR', error}) )
    }
}





        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
