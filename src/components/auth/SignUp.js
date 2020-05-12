import React, {Component} from 'react'
import { connect } from 'react-redux';
import { createUser } from '../../store/actions/signupAction'

class SignUp extends Component {

    state = {
        email: "",
        password: "",
        password2: ""
    }

    handleRedirection = () => {
        this.props.history.push('/zaloguj')
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSignUp = (e) => {
        e.preventDefault();
        const regMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.password !== this.state.password2) {
            alert('hasła się różnią')
        } else if(!regMail.test(this.state.email)){
            alert('Niepoprawny adres e-mail')
        }else {
            const data = {
                id: Math.floor(Math.random() *100),
                email: this.state.email,
                password: this.state.password
            }
            this.props.createUser(data);
            this.setState({
                email: "",
                password: "",
                password2: ""
            })
            this.props.history.push('/')
        }      
    }

    render(){
    return (
        <section className= "section__login">
            <h1>Załóż konto</h1>
            <div className = "decoration__line"></div>
            <form className="form__login" onSubmit = {this.handleSignUp}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required onChange = {this.handleChange} value ={this.state.email}></input>
                <label htmlFor="password">Hasło</label>
                <input type="password" id="password" required minLength = "6" onChange = {this.handleChange} value = {this.state.password}></input>
                <label htmlFor="password2">Powtórz hasło</label>
                <input type="password" id="password2" required minLength = "6" onChange = {this.handleChange} value= {this.state.password2}></input>
                <div className ="buttons">
                    <button className = "btn--login">Załóż konto</button> 
                    <button onClick = {this.handleRedirection}>Zaloguj się</button>  
                </div>
            </form>
        </section>
    )
}}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (data) => dispatch(createUser(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)