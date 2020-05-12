import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home4Steps extends Component {
    render() {
        return (
            <section className = "container section__how" id = "homeHow">
                <h3>Wystarczą 4 proste kroki</h3>
                <div className = "decoration__line"></div>
                <div className = "section__how__steps">
                    <div className = "step">
                        <div className = " step__img step__img__shirt"></div>
                        <p className ="step__info">Wybierz rzeczy</p>
                        <div className = "step__line"></div>
                        <p className = "step__more">ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className = "step">
                        <div className = "step__img step__img__bag"></div>
                        <p className ="step__info">Spakuj je</p>
                        <div className = "step__line"></div>
                        <p className = "step__more">skorzystaj z worków na śmieci</p>
                    </div>
                    <div className = "step">
                        <div className = "step__img step__img__loupe"></div>
                        <p className ="step__info">Zdecyduj komu chcesz pomóc</p>
                        <div className = "step__line"></div>
                        <p className = "step__more">wybierz zaufane miejsce</p>
                    </div>
                    <div className = "step">
                        <div className = "step__img step__img__arrow"></div>
                        <p className ="step__info">Zamów kuriera</p>
                        <div className = "step__line"></div>
                        <p className = "step__more">kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <button className="btn__how"><Link to="/oddaj-rzeczy">Oddaj rzeczy</Link></button>
            </section>
        )
    }
}

export default Home4Steps