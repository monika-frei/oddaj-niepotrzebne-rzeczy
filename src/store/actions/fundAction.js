export function fetchFundData() {
    return function(dispatch) {
        return fetch(`http://localhost:3005/foundations`)
                .then((resp) => resp.json())
                .then((json)=> dispatch({type: 'FETCH_FUNDS_SUCCESS', payload: json}))
                .catch(error => dispatch({type:'FETCH_FUNDS_ERROR', error}) )
    }
}