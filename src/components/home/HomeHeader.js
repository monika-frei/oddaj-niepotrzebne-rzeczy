import React from 'react'
import { Link } from 'react-router-dom'


function HomeHeader() {
    return (
        <section className = "container section__header" id ="homeStart">
            <div className = "header__main">
                <h1>Zacznij pomagać!<br></br> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <div className="decoration__line"></div>
                <div className = "buttons">
                    <button className = "btn"><Link to = "/oddaj-rzeczy">Oddaj rzeczy</Link></button>
                </div>
            </div> 
        </section>
    )
}


export default HomeHeader