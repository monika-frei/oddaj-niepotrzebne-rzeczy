export function fetchFormsData() {
    return function(dispatch) {
        return fetch(`https://db-oddaj-rzeczy.herokuapp.com/forms`)
                .then((resp) => resp.json())
                .then((json)=> dispatch({type: 'FETCH_FORMS_SUCCESS', payload: json}))
                .catch(error => dispatch({type:'FETCH_FORMS_ERROR', error}) )
    }
}