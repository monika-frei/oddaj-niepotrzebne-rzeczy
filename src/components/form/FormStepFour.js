import React, { Component } from 'react'
import {connect} from 'react-redux'
import { formStepFourStreet } from '../../store/actions/formActions'
import { formStepFourCity } from '../../store/actions/formActions'
import { formStepFourPostalCode } from '../../store/actions/formActions'
import { formStepFourTelNumber } from '../../store/actions/formActions'
import { formStepFourDate } from '../../store/actions/formActions'
import { formStepFourTime } from '../../store/actions/formActions'
import { formStepFourInfo } from '../../store/actions/formActions'

class FormStepFour extends Component {
    state ={
        street:"",
        city:"",
        postalCode: null,
        telNumber: null,
        date: "",
        time: "",
        info: ""
    }

    handleStreet = (e) => {
        const street = e.target.value
        this.setState({
            street
        })
        this.props.formStepFourStreet(street)
    }

    handleCity = (e) => {
        const city = e.target.value
        this.setState({
            city
        })
        this.props.formStepFourCity(city)
    }
    handlePostalCode = (e) => {
        const postalCode= e.target.value
        this.setState({
                postalCode
            })
            this.props.formStepFourPostalCode(postalCode)

    }
    handleTelNumber = (e) => {
        const telNumber= e.target.value
        const regEx = /^\d+$/
        if (regEx.test(telNumber)){
            this.setState({
                telNumber
            })
            this.props.formStepFourTelNumber(telNumber)
        } else {
            window.alert('wprowadz poprawny numer telefonu')
        }
        
    }
    handleDate = (e) => {
        const date= e.target.value
        this.setState({
            date
        })
        this.props.formStepFourDate(date)
    }
    handleTime = (e) => {
        const time= e.target.value
        this.setState({
            time
        })
        this.props.formStepFourTime(time)
    }
    handleInfo = (e) => {
        const info= e.target.value
        this.setState({
            info
        })
        this.props.formStepFourInfo(info)
    }
    
    render(){
        return(
            <section className="form__step--four">
                <p>Krok 4/4</p>
                <h2>Podaj adres oraz termin<br></br>odbioru rzeczy przez kuriera:</h2>
                <div className = "form__user__data__container">
                <div className = "form__user__data">
                    <h3>Adres odbioru:</h3>
                    <label htmlFor = "street">Ulica *</label>
                    <input type="text" id = "street" onChange = {this.handleStreet} value = {this.props.street}></input>
                    <label htmlFor = "city">Miasto *</label>
                    <input type="text" id = "city" onChange = {this.handleCity} value = {this.props.city}></input>
                    <label htmlFor = "postalCode">Kod pocztowy</label>
                    <input type="text" id = "postalCode"  onChange = {this.handlePostalCode} value = {this.props.postalCode}></input>
                    <label htmlFor = "telNumber">Numer telefonu *</label>
                    <input type="text" pattern = "[0-9]*"id = "telNumber" onChange = {this.handleTelNumber} value = {this.props.telNumber}></input>                    
                </div>
                <div className = "form__user__data">
                    <h3>Termin odbioru:</h3>
                    <label htmlFor = "date">Data *</label>
                    <input type="date" id = "date" onChange = {this.handleDate} value = {this.props.date}></input>
                    <label>Godzina *</label>
                    <select id = "time"  onChange = {this.handleTime} value = {this.props.time}>
                            <option value="">--wybierz--</option>
                            <option value="09:00">09:00</option>
                            <option value ="10:00">10:00</option>
                            <option value = "11:00">11:00</option>
                            <option value = "12:00">12:00</option>
                            <option value = "13:00">13:00</option>
                            <option value = "14:00">14:00</option>
                            <option value = "15:00">15:00</option>
                        </select>
                    <label htmlFor = "info">Uwagi dla kuriera:</label>
                    <textarea id ="info" maxLength = "100" onChange = {this.handleInfo} value = {this.props.info}></textarea>
                </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        street: state.formData.street.street,
        city: state.formData.city.city,
        postalCode: state.formData.postalCode.postalCode,
        telNumber: state.formData.telNumber.telNumber,
        date: state.formData.date.date,
        time: state.formData.time.time,
        info: state.formData.info.info
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        formStepFourStreet: street => dispatch(formStepFourStreet(street)),
        formStepFourCity: city => dispatch(formStepFourCity(city)),
        formStepFourPostalCode: postalCode => dispatch(formStepFourPostalCode(postalCode)),
        formStepFourTelNumber: telNumber => dispatch(formStepFourTelNumber(telNumber)),
        formStepFourDate: date => dispatch(formStepFourDate(date)),
        formStepFourTime: time => dispatch(formStepFourTime(time)),
        formStepFourInfo: info => dispatch(formStepFourInfo(info))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormStepFour)