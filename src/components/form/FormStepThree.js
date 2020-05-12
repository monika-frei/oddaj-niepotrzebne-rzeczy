import React, { Component } from 'react'
import {connect} from 'react-redux'
import { formStepThreeLocalization } from '../../store/actions/formActions'
import { formStepThreeToWho } from '../../store/actions/formActions'
import { formStepThreeOrganization } from '../../store/actions/formActions'

class FormStepThree extends Component {

    state = {
        localization: "",
        toWho: this.props.toWho,
        organization: "",
        classToWho1: false,
        classToWho2: false,
        classToWho3: false,
        classToWho4: false,
        classToWho5: false
    }

    handleLocal = (e) => {
        const localization = e.target.value
        this.setState({
            localization
        })
        this.props.formStepThreeLocalization(localization)
    }
    handleToWho = (e) => {
        const toWho = e.target.value
        this.setState({
            toWho,
            classToWho1: false,
            classToWho2: false,
            classToWho3: false,
            classToWho4: false,
            classToWho5: false

        })
        this.props.formStepThreeToWho(toWho)
    }

    handleOrganization = (e) => {
        const organization= e.target.value
        this.setState({
            organization
        })
        this.props.formStepThreeOrganization(organization)
    }

    componentDidMount() {
        const toWho = ["dzieciom","samotnym matkom","bezdomnym","niepełnosprawnym","osobom starszym"]
        if(this.props.toWho.length !== 0){
            toWho.forEach((option, index) => {
                if(this.props.toWho.includes(option)) {
                    this.setState({
                        [`classToWho${index+1}`]: true
                    })
                }
            })
        }        
    }

    render(){
        return(
            <section className = "form__step form__step--three">
                <p>Krok 3/4</p>
                <h2>Lokalizacja:</h2>
                <label>
                <select value = {this.props.localization} onChange = {this.handleLocal}>
                    <option value="">--wybierz--</option>
                    <option value="Poznań">Poznań</option>
                    <option value ="Warszawa">Warszawa</option>
                    <option value = "Kraków">Kraków</option>
                    <option value = "Wrocław">Wrocław</option>
                    <option value = "Katowice">Katowice</option>
                </select>
                </label>
                <h3>Komu chcesz pomóc?</h3>
                <div className ="who__help">
                    <input type="radio" name = "who" id = "1" value ="dzieciom" onChange = {this.handleToWho} className = {this.state.classToWho1 ? "checked" : ""}></input>
                    <label htmlFor = "1">dzieciom</label>
                    <input type="radio" name = "who" id = "2" value ="samotnym matkom" onChange = {this.handleToWho} className = {this.state.classToWho2 ? "checked" : ""}></input>
                    <label htmlFor= "2">samotnym matkom</label>
                    <input type="radio" name = "who" id = "3" value="bezdomnym" onChange = {this.handleToWho} className = {this.state.classToWho3 ? "checked" : ""}></input>
                    <label htmlFor = "3">bezdomnym</label>
                    <input type="radio" name= "who" id = "4" value="niepełnosprawnym" onChange = {this.handleToWho} className = {this.state.classToWho4 ? "checked" : ""}></input>
                    <label htmlFor = "4">niepełnosprawnym</label>
                    <input type="radio" name= "who" id = "5" value="osobom starszym" onChange = {this.handleToWho} className = {this.state.classToWho5 ? "checked" : ""}></input>
                    <label htmlFor = "5">osobom starszym</label>
                </div>
                    
                    <label htmlFor = "optional">Wpisz nazwę konkretnej organizacji (opcjonalnie):</label>
                    <input type = "text" id = "optional" value = {this.props.organization} onChange = {this.handleOrganization}></input>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        localization: state.formData.localization.localization,
        toWho: state.formData.toWho.toWho,
        organization: state.formData.organization.organization
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        formStepThreeLocalization: (localization) => dispatch(formStepThreeLocalization(localization)),
        formStepThreeToWho: (toWho) => dispatch(formStepThreeToWho(toWho)),
        formStepThreeOrganization: (organization) => dispatch(formStepThreeOrganization(organization))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormStepThree)