export function fetchUsers() {
    return function(dispatch) {
        return fetch(`https://db-oddaj-rzeczy.herokuapp.com/users`)
                .then((resp) => resp.json())
                .then((json)=> dispatch({type: 'FETCH_USERS_SUCCESS', payload: json}))
                .catch(error => dispatch({type:'FETCH_USERS_ERROR', error}) )
    }
}

export const loggedUser = user => ({
    type: 'LOGGED_USER',
    user
})

export const logOutUser = user => ({
    type: 'LOGGED_OUT_USER',
    user
})