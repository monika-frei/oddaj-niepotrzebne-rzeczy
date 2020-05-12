import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formStepOne } from '../../store/actions/formActions'

class FormStepOne extends Component {
    state = {
        thingsToDonate: [],
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false
    }

    handleChangeCheckbox = (e) => {
        const target = e.target;
        const checked = target.checked;
        const value = target.value;
        const name = target.name;
        let thingsToDonate = [...this.state.thingsToDonate];
        if(checked === true && thingsToDonate.indexOf(value) === -1) {
            const newItem = value; 
            thingsToDonate = [...thingsToDonate, newItem]
            this.setState({
                thingsToDonate,
                [`checked${name}`]: true
                
            })
        } else if (checked === false && thingsToDonate.indexOf(value) !== -1) {
            thingsToDonate = thingsToDonate.filter(element => element !== value)
            this.setState({
                thingsToDonate,
                [`checked${name}`]: false              
            })
        } else {
            this.setState({
                [`checked${name}`]: false              
            })
        }
        this.props.thingsToDonate(thingsToDonate);        
    }

    componentDidMount() {
        const options = ["ubrania, które nadają się do ponownego użycia","ubrania, do wyrzucenia","zabawki","książki","inne"]
        const items = this.props.items.thingsToDonate;
        console.log(items)
        if(items.length !== 0){
            options.forEach((option, index) => {
                if(items.includes(option)) {
                    this.setState({
                        [`checked${index+1}`]: true
                    })
                }
            })
        }        
    }

    render(){
        return(
            <section className = "form__step form__step--one">
                    <p>Krok 1/4</p>
                    <h2>Zaznacz co chcesz oddać:</h2>
                    <input type="checkbox" id = "items-1" name = "1" value = "ubrania, które nadają się do ponownego użycia" checked = {this.state.checked1} onChange = {this.handleChangeCheckbox}></input>
                    <label htmlFor = "items-1">ubrania, które nadają się do ponownego użycia</label>
                    <input type="checkbox" id = "items-2" name = "2" value = "ubrania, do wyrzucenia" checked= {this.state.checked2} onChange = {this.handleChangeCheckbox}></input>
                    <label htmlFor = "items-2">ubrania, do wyrzucenia</label>
                    <input type="checkbox" id  ="items-3" name = "3" value = "zabawki" checked = {this.state.checked3} onChange = {this.handleChangeCheckbox}></input>
                    <label htmlFor = "items-3">zabawki</label>
                    <input type="checkbox" id = "items-4" name= "4" value = "książki" checked = {this.state.checked4} onChange = {this.handleChangeCheckbox}></input>
                    <label htmlFor = "items-4">książki</label>
                    <input type="checkbox" id = "items-5" name = "5" value= "inne" checked = {this.state.checked5} onChange = {this.handleChangeCheckbox}></input>
                    <label htmlFor = "items-5">inne</label>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.formData.thingsToDonate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        thingsToDonate: (thingsToDonate) => dispatch(formStepOne(thingsToDonate))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormStepOne)