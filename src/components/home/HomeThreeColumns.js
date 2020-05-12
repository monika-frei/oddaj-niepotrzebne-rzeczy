import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFormsData } from '../../store/actions/formsTotalAction'

class HomeThreeColumns extends Component {

    state = {
        organizations: 0,
        bagsToDonate: 0,
        totalForms: 0
    }

    async componentDidMount() {
        const forms = await this.props.fetchFormsData();
        const totalForms = await forms.payload.length
        this.setState({
            totalForms,
            forms: forms.payload
        })       
    }

    render() {

        //counts number of organizations
        
        const items =this.props.items;
        const fund = items.find(fund => fund.name === "foundations")
        const totalFund = fund ? fund.items.length : 0;
        const org = items.find(org => org.name === "organizations")
        const totalOrg = org ? org.items.length : 0;
        const local = items.find(local => local.name === "locals")
        const totalLocal = local ? local.items.length : 0;
        const total = totalFund + totalOrg + totalLocal

        //counts number of donated bags

        const forms = this.state.forms;
        let quantitiesArray;
        if(forms) {
            quantitiesArray = forms.map(form => Number(form.quantity))
        }
        let totalBags = 0;
        if(quantitiesArray) {
            totalBags = quantitiesArray.reduce((prev,curr) => prev+curr)
        }  
        
        return (
            <section className = "container section__three_columns">
                <div className = "data__item">
                    <h2 className = "data__num">{totalBags}</h2>
                    <p className = "data__info">oddanych worków</p>
                    <p className = "data__more">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className = "data__item">
                    <h2 className = "data__num">{total}</h2>
                    <p className = "data__info">wspartych organizacji</p>
                    <p className = "data__more">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className = "data__item">
                    <h2 className = "data__num">{this.state.totalForms}</h2>
                    <p className = "data__info">zorganizowanych zbiórek</p>
                    <p className = "data__more">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items.items,
        forms: state.forms.items
    }
}

export default connect(mapStateToProps, { fetchFormsData })(HomeThreeColumns)