import React, {Component} from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

class MobileMenu extends Component {

    state = {
        open: false,
        navClass: "mobile__navigation menu__invisible"
      }

    handleClick = () => {
        this.setState({
            open: !this.state.open
        })
        if(this.state.navClass === "mobile__navigation menu__invisible") {
            this.setState({
                navClass: "mobile__navigation menu--active"
            })
        } else {
            this.setState({
                navClass: "mobile__navigation menu__invisible"
            })
        }
    }

    handleMenuClose = () => {
        this.setState({
            open: false,
            navClass:"mobile__navigation menu__invisible" 
        })
    }

    render() {
        return (
            <section className = "mobile__header">
                <div className = "mobile__menu">
                    <HamburgerMenu 
                        isOpen = {this.state.open}
                        menuClicked = {this.handleClick}
                        width = {25}
                        height = {20}
                        animationDuration = {0.2}
                        className = "hamburger"
                    />
                    <nav className = {this.state.navClass}>
                        <ul>
                            <li onClick = {this.handleMenuClose}>
                                <NavLink 
                                    to = "/zaloguj" 
                                    className ="btn__auth"
                                    >
                                    Zaloguj
                                </NavLink>
                            </li>
                            <li onClick = {this.handleMenuClose}>
                                <NavLink 
                                    to = "/nowekonto" 
                                    className ="btn__auth"
                                    >
                                    Załóż konto
                                </NavLink>
                            </li>
                            <li onClick = {this.handleMenuClose}>
                                <Link
                                    activeClass ="active"
                                    smooth to = "/#homeStart"
                                >Start</Link>
                            </li>
                            <li onClick = {this.handleMenuClose}>
                                <Link
                                    activeClass ="active"
                                    smooth to = "/#homeHow"
                                >O co chodzi?</Link>
                            </li>
                            <li onClick = {this.handleMenuClose}>
                                <Link
                                    activeClass ="active"
                                    smooth to = "/#homeAboutUs"
                                >O nas</Link>
                            </li>
                            <li onClick = {this.handleMenuClose}>
                                <Link
                                    activeClass ="active"
                                    smooth to = "/#homeFundOrg"
                                >Fundacje i organizacje</Link>
                            </li>
                            <li onClick = {this.handleMenuClose}>
                                <Link
                                    activeClass ="active"
                                    smooth to = "/#homeContact"
                                >Kontakt</Link>
                            </li>
                        </ul>                        
                    </nav>
                </div>
                    <div className = "mobile__logo"></div>
            </section>
        )
    }
}

export default MobileMenu
