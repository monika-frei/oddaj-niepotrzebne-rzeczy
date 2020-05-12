import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formStepTwo } from '../../store/actions/formActions'

class FormStepTwo extends Component {

    state = {
        quantity: this.props.quantity,
    }

    handleStepTwo = (e) => {
        const quantity = e.target.value;
        this.setState({quantity})
        this.props.quantity(quantity)
    }

    render(){
        return(
            <section className = "form__step form__step--two">
                <p>Krok 2/4</p>
                <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                <label htmlFor = "quantity">
                    Liczba 60l worków:
                <select id = "quantity" value = {this.props.quantityOfBags} onChange = {this.handleStepTwo}>
                    <option value="">--wybierz--</option>
                    <option value="1">1</option>
                    <option value ="2">2</option>
                    <option value = "3">3</option>
                    <option value = "4">4</option>
                    <option value = "5">5</option>
                </select>
                </label>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        quantityOfBags: state.formData.quantity.quantity
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        quantity: (quantity) => dispatch(formStepTwo(quantity))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FormStepTwo)