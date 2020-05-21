import React from 'react'
import { NavLink } from 'react-router-dom'


function AuthNav() {
    return (
        <nav className= "auth" data-test= "AuthNav__Component">
            <NavLink 
                to = "/zaloguj" 
                className ="btn__auth btn__login"
                activeStyle ={{border: '1px solid #FAD648'}}
                >
                Zaloguj
            </NavLink>
            <NavLink 
                to = "/nowekonto" 
                className ="btn__auth btn__signup"
                activeStyle ={{border: '1px solid #FAD648'}}
                >
                Załóż konto
            </NavLink>
        </nav>
    )
}



export default AuthNav