import React, { useState } from 'react';
import Countdown, {zeroPad} from 'react-countdown-now';

import Socials from './socials'

function CountdownContainer(props){
    let data = props.data
    return(
            <div className="contdown-container">
                <div className="vertical-align">
                    <Countdown  date='Tue, 8 Oct 2019 00:00:00' renderer={props => 
                        <div className="columns is-desktop">
                            <div className="column has-text-centered">
                                    <p>
                                        <span className="ct-label">{data.days}</span>
                                    </p>
                                    <span className="ct-title">{zeroPad(props.days, 2)}</span>
                            </div>
                            <div className="column has-text-centered">
                                    <p>
                                        <span className="ct-label">{data.hours}</span>
                                    </p>
                                    <span className="ct-title">{zeroPad(props.hours, 2)}</span>
                            </div>
                            <div className="column has-text-centered">
                                    <p>
                                        <span className="ct-label">{data.minutes}</span>
                                    </p>
                                    <span className="ct-title">{zeroPad(props.minutes, 2)}</span>
                            </div>
                            <div className="column has-text-centered">
                                    <p>
                                        <span className="ct-label">{data.seconds}</span>
                                    </p>
                                    <span className="ct-title">{zeroPad(props.seconds, 2)}</span>
                            </div>
                        </div>}
                    />
                    <div className="is-hidden-desktop has-text-centered is-uppercase">
                        <div className="footer-link">
                                <a className="link-navbar link-footer" href="./contacts.html">{props.data.contacts} -</a>
                                <a className="link-navbar link-lang" href="?lang=it">
                                    Ita
                                </a>
                                <span className="divider-pipe link-lang"> | </span>
                                <a className="link-navbar link-lang" href="?lang=en">
                                    Eng
                                </a>
                        </div>
                        <Socials/>
                    </div>
                </div>
            </div>
            
    )
}

export default CountdownContainer;
