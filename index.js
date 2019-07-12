import React, { useState } from 'react';
import ReactDOM from "react-dom";

import Hero from './components/hero'
import Logo from './components/logo'
import Navbar from './components/navbar'
import Socials from './components/socials'
import query from './components/query'
import CountdownContainer from './components/countdownContainer'

const DataEng = require('./data/en.json')
const DataIta = require('./data/it.json')


function Index(){

    var data = {}
    var q = query(window.location.search)

    if(q.lang == 'en'){
        data = DataEng
    }else{
        data = DataIta
    }

    return(
        <div>
            <Hero className="hero is-fullheight hero-section">
            <div className="columns">
                {/* Logo column */}
                <div className="column is-hidden-mobile">
                    <div className="logo-container">
                        <a href="/">
                            <Logo fill="#efeddb" height="64" />
                        </a>
                    </div>
                </div>
                {/* Main content */}
                <div className="column is-two-thirds main-content">
                        <header>
                            <Navbar data={data} />
                            <Socials classes="is-hidden-mobile has-text-right-desktop has-text-centered-tablet padding2"/>
                        </header>
                        <main>
                            <CountdownContainer data={data}/>
                        </main>
                </div>
            </div>
            </Hero>
        </div>
    );
}

var mountNode = document.getElementById("app");
ReactDOM.render(<Index />, mountNode);