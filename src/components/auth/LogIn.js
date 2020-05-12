import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchUsers, loggedUser } from '../../store/actions/usersAction'

class LogIn extends Component {

    state = {
        email: "",
        password: ""
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    handleRedirection = () => {
        this.props.history.push('/nowekonto')
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleLogIn = (e) => {
        const email = this.state.email;
        const password = this.state.password;
        const users = this.props.users.items;
        e.preventDefault();
        const regMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regMail.test(email)){
            alert('Niepoprawny adres e-mail')
        } else if (password.length < 6) {
            alert('hasło za krotkie')
        } else if (users.find((user) => user.email === email)) {
            const i = users.filter((user) => {
                if(user.email === email){
                    return user
                }
            })
        const user = i[0];
        if(user.password === password){
            this.props.loggedUser(user)
            this.props.history.push('/') 
        }} else {
            alert('nie ma takiego użytkownika')
        }
    }

    render(){
    return (
        <section className= "section__login">
            <h1>Zaloguj się</h1>
            <div className = "decoration__line"></div>
            <form className="form__login" onSubmit = {this.handleLogIn}>
                <label for="email">Email</label>
                <input type="email" id="email" onChange = {this.handleChange} value = {this.state.email} required></input>
                <label for="password">Hasło</label>
                <input type="password" id="password" onChange = {this.handleChange} value = {this.state.password} required></input>
                <div className ="buttons">
                    <button className = "btn--login">Zaloguj się</button> 
                    <button  onClick = {this.handleRedirection}>Załóż konto</button>  
                </div>
            </form>
        </section>
    )
}}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        loggedUser: (user) => dispatch(loggedUser(user.email))        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LogIn)