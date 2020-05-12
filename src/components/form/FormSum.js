import React, { Component } from 'react'
import {connect} from 'react-redux'

class FormSum extends Component {
    render() {
        return (
            <section className = "form__summary">
                <h2>Podsumowanie Twojej darowizny</h2>
                <h3>Oddajesz:</h3>
                <div className = "things__to__donate">
                    <div className = "icon icon__shirt"></div>
                    <p><span>{this.props.quantity}</span> worki, <span>{this.props.thingsToDonate.join('; ')}</span><br></br>oddane zostaną: <span>{this.props.toWho}</span>, dla organizacji: <span>{this.props.organization}</span></p>
                </div>                
                <div className = "localization">
                    <div className = "icon icon__arrow"></div>
                    <p>dla lokalizacji: <span>{this.props.localization}</span></p>
                </div>
                    <div className="address">
                        <h3>Adres odbioru</h3>
                        <p>Ulica: <span>{this.props.street}</span></p>
                        <p>Miasto: <span>{this.props.city}</span></p>
                        <p>Kod pocztowy: <span>{this.props.postalCode}</span></p>
                        <p>Numer telefonu: <span> {this.props.telNumber} </span></p>
                    </div>
                    <div className="term">
                        <h3>Termin odbioru</h3>
                        <p>Data: <span>{this.props.date}</span></p>
                        <p>Godzina: <span> {this.props.time} </span></p>
                        <p>Uwagi dla kuriera: <p className ="delivery__info"><span>{this.props.info}</span></p></p>
                    </div>
              </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        quantity: state.formData.quantity.quantity,
        thingsToDonate: state.formData.thingsToDonate.thingsToDonate,
        localization: state.formData.localization.localization,
        toWho: state.formData.toWho.toWho,
        organization: state.formData.organization.organization,
        street: state.formData.street.street,
        city: state.formData.city.city,
        postalCode: state.formData.postalCode.postalCode,
        telNumber: state.formData.telNumber.telNumber,
        date: state.formData.date.date,
        time: state.formData.time.time,
        info: state.formData.info.info
    }
}

export default connect(mapStateToProps)(FormSum)