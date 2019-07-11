import React from 'react';

function Socials(props){
    return(
        <div className={props.classes}>
            <a className="button social" href="https://www.facebook.com/MusiaRoma/">
                <span className="icon is-small">
                    <i className="fab fa-facebook-f"></i>
                </span>
            </a>
            <a className="button social" href="https://twitter.com/musia_roma">
                <span className="icon is-small">
                    <i className="fab fa-twitter"></i>
                </span>
            </a>
            <a className="button social" href="https://www.instagram.com/musia_roma/">
                <span className="icon is-small">
                    <i className="fab fa-instagram"></i>
                </span>
            </a>
            <a className="button social" href="https://www.youtube.com/channel/UCAAs7yTnwIJRPLvZsNpA-YQ">
                <span className="icon is-small">
                    <i className="fab fa-youtube"></i>
                </span>
            </a>
        </div>
    )
}
export default Socials;