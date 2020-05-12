import React, { Component } from  'react';
import { connect } from 'react-redux';
import { sendContactForm } from '../../store/actions/contactFormActions'

class HomeContactForm extends Component {

    state = {
        name: "",
        email: "",
        message: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const regName = /^[a-zA-Z]+$/;
        const regMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regName.test(this.state.name)){
            alert('Niepoprawne imię')
        } else if(!regMail.test(this.state.email)){
            alert('Niepoprawny adres e-mail')
        }else {
            const data = {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            }

            this.props.sendContactForm(data)
            this.setState({
                name: "",
                email: "",
                message: ""
            })            
        }
    }      
    
    render() {
        return(
            <section className = "section__contact" id ="homeContact">
                <div className ="contact__background"></div>
                <div className = "form--wrapper">
                    <h2>Skontaktuj się z nami</h2>
                    <div className = "decoration__line"></div>
                    <form className = "form__contact" onSubmit = {this.handleSubmit}>
                        <div className = "contact__user__data">
                            <div className = "form__data">
                                <label htmlFor = "name">Wpisz swoje imię</label>
                                <input type = "text" id = "name" placeholder = "Krzysztof" value ={this.state.name} onChange = {this.handleChange} required></input>
                            </div>
                            <div className ="form__data">
                                <label htmlFor = "email">Wpisz swój e-mail</label>
                                <input type = "email" id = "email" placeholder = "abc@xyz.pl" value ={this.state.email} onChange = {this.handleChange} required></input>
                            </div>
                        </div>
                        <div className = "form__message">
                            <label htmlFor = "message">Wpisz swoją wiadomość</label>
                            <textarea id = "message" minLength = "120" value ={this.state.message} placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." onChange = {this.handleChange} required></textarea>
                        </div>
                        <button className = "btn">Wyślij</button>
                    </form>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendContactForm: (form) => dispatch(sendContactForm(form))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeContactForm)


