import React, { useState } from 'react';

function Hero(props){
    return(
        <section className={props.className}>
            {props.children}
        </section>
    );
}

export default Hero;