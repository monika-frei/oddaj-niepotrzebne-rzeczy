export function fetchFundData() {
    return function(dispatch) {
        return fetch(`https://db-oddaj-rzeczy.herokuapp.com/foundations`)
                .then((resp) => resp.json())
                .then((json)=> dispatch({type: 'FETCH_FUNDS_SUCCESS', payload: json}))
                .catch(error => dispatch({type:'FETCH_FUNDS_ERROR', error}) )
    }
}