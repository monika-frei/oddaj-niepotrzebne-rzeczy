import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOutUser } from '../../store/actions/usersAction'

class UserAuthNav extends Component {

    handleLogOut = () => {
        this.props.loggedUser()
    }

    render() {
    return (
        <nav className= "auth">
            <p className = "user--logged">Cześć {this.props.user}! </p>
            <NavLink 
                to = "/oddaj-rzeczy" 
                className ="btn__auth"
                activeStyle ={{border: '1px solid #FAD648'}}
                >
                Oddaj rzeczy
            </NavLink>
            <NavLink 
                to = "/" 
                className ="btn__auth"
                activeStyle ={{border: '1px solid #FAD648'}}
                >
                    <div onClick = {this.handleLogOut}>Wyloguj</div>
            </NavLink>
        </nav>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.loggedUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loggedUser: () => dispatch(logOutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthNav)