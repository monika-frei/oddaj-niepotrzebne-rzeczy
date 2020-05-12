import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

function UserNavigation() {
    return (
        <nav>
            <ul className= "menu">
                <li className = "nav__item">                
                    <Link
                        activeClass ="active"
                        smooth to = "/#homeStart"
                    >Start</Link>
                </li>
                <li className = "nav__item">
                    <Link
                        activeClass ="active"
                        smooth to = "/#homeHow"
                        
                    >O co chodzi?</Link>
                </li>
                <li className = "nav__item">
                    <Link
                        activeClass ="active"
                        smooth to = "/#homeAboutUs"
                    >O nas</Link>
                </li>
                <li className = "nav__item">
                    <Link
                        activeClass ="active"
                        smooth to = "/#homeFundOrg"
                    >Fundacje i organizacje</Link>
                </li>
                <li className = "nav__item">
                    <Link
                        activeClass ="active"
                        smooth to = "/#homeContact"
                    >Kontakt</Link>
                </li>
            </ul>
        </nav>
    )
}

export default UserNavigation