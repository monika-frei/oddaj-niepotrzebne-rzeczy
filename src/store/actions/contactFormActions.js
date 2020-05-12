export function sendContactForm(contactForm) {
    return function(dispatch) {
        return fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(contactForm)
                })
                .then((resp) => resp.json())
                .then(()=> dispatch({type: 'SEND_CONTACT_FORM', contactForm}))  // warunek sukces błąd
                .catch(error => dispatch({type:'SEND_CONTACT_FORM_ERROR', error}) )
    }
}