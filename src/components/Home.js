import React from 'react'
import HomeThreeColumns from './home/HomeThreeColumns'
import Home4Steps from './home/Home4Steps'
import HomeHeader from './home/HomeHeader';
import HomeAbout from './home/HomeAbout';
import HomeWho from './home/HomeWho';
import HomeContactForm from './home/HomeContactForm';
import HomeFooter from './home/HomeFooter';
import MobileScrollBtn from './menu/MobileScrollBtn';

function Home() {
    return (
        <main className = "container">
            <HomeHeader />
            <HomeThreeColumns />
            <Home4Steps />
            <HomeAbout />
            <HomeWho />
            <HomeContactForm />
            <HomeFooter />
            <MobileScrollBtn /> 
        </main>
    )
}

export default Home;