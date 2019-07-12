import React, { useState } from 'react';
import ReactDOM from "react-dom";

import'./assets/css/theme.css'

import Hero from './components/hero'
import Logo from './components/logo'
import Navbar from './components/navbar'
import Socials from './components/socials'
import query from './components/query'



const DataEng = require('./data/en.json')
const DataIta = require('./data/it.json')



function Contact(){

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
                            <Navbar data={data}/>
                            <Socials classes="is-hidden-mobile has-text-right-desktop has-text-left-tablet padding2"/>
                        </header>
                        <main>
                            <div className="vertical-align">
                                <h1 className="title is-1 is-capitalized">
                                    {data.contacts}
                                </h1>
                                <ul className="subtitle is-4">
                                    <li>{data.address}</li>
                                    <li>{data.tel}</li>
                                    <li><a href={'mailto:' + data.email}>{data.email}</a></li>
                                </ul>
                            </div>
                        </main>
                </div>
            </div>
            </Hero>
        </div>
    );
}

var mountNode = document.getElementById("app");
ReactDOM.render(<Contact />, mountNode);