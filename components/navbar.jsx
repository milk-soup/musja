import React, { useState } from 'react';
import Logo from './logo'
import Socials from './socials'



function Navbar(props){
    const [active, setActive] = useState('');
    function isActive(state){
        if(state == ''){
            setActive('is-active')
        }else{
            setActive('')
        }
    }

    return(
        <nav className="navbar main-navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item is-hidden-tablet" href="/">
                    <Logo height="32" fill="#3c3c3b"/>
                </a>
                <a role="button" className={'navbar-burger burger ' + active} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={()=>isActive(active)}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className={'navbar-menu ' + active}>
                <div className="navbar-end is-uppercase has-text-centered">
                    <span className="navbar-item is-hidden-desktop">
                        <a className="link-navbar" href="/">Home</a>
                    </span>
                    <span className="navbar-item">
                        <a className="link-navbar" href="./contacts.html">{props.data.contacts}</a>
                    </span>
                    <span className="navbar-item">
                        <a className="link-navbar" href="?lang=it">
                            Ita
                        </a>
                        <span className="divider-pipe"> | </span>
                        <a className="link-navbar" href="?lang=en">
                            Eng
                        </a>
                    </span>
                    <Socials classes="is-hidden-tablet"/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;