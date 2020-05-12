import React, { Component } from 'react'
import Foundations from './who/Foundations'
import { connect } from 'react-redux'
import { fetchFundData } from '../../store/actions/fundAction'

class HomeWho extends Component {
    state ={
        items: [],
        who: "foundations",
        activeBtn: "btn--active",
        currentPage: 1,
        itemsPerPage: 3,
    }

    //fetching organizations data

    async componentDidMount() {
        await this.props.fetchFundData();
    }

    handleWhoButton = (e) => {
       const who = e.target.name;
       this.setState({
           who,
           currentPage: 1
       })
    }

    handlePageChange = (e) => {
        e.preventDefault();
        const pageNumber = e.target.id;
        this.setState({
            currentPage: pageNumber
        })
    }


    
    render() {
        const items =this.props.items;
        const fund = items.find(fund => fund.name === this.state.who)

        // displaying page numbers
        const pageNumbers = [];
        if (fund) {
            for (let i = 1; i <= Math.ceil(fund.items.length / this.state.itemsPerPage); i++){
                pageNumbers.push(i);
            }
        }

        const pageNumbersList = pageNumbers.map( page => {
            return(
                <li key = { page } id = { page } onClick = {this.handlePageChange}>{ page }</li> 
            )
        })
        
        return (
            <div className = "section__who" id="homeFundOrg">
                <h2>Komu pomagamy?</h2>
                <div className = "decoration__line"></div>
                <div className = "who__nav">
                    <button className = {this.state.who === "foundations" ? this.state.activeBtn : ""} name = "foundations" onClick = {this.handleWhoButton}>Fundacjom</button>
                    <button className = {this.state.who === "organizations" ? this.state.activeBtn : ""} name = "organizations" onClick = {this.handleWhoButton}>Organizacjom pozarządowym</button>
                    <button className = {this.state.who === "locals" ? this.state.activeBtn : ""} name = "locals" onClick = {this.handleWhoButton}>Lokalnym zbiórkom</button>
                </div>
                <Foundations items= {fund ?.items || []} itemsPerPage = {this.state.itemsPerPage} currentPage = {this.state.currentPage} />
                <ul className = "section__who__pages">
                    { pageNumbersList }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items.items
    }
}


export default connect(mapStateToProps, { fetchFundData })(HomeWho)