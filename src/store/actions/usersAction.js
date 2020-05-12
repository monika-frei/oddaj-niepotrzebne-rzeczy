export function fetchUsers() {
    return function(dispatch) {
        return fetch(`http://localhost:3005/users`)
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