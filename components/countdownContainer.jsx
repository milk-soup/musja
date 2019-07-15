import React, { useState } from 'react';
import Countdown, {zeroPad} from 'react-countdown-now';

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
                </div>
            </div>
            
    )
}

export default CountdownContainer;
