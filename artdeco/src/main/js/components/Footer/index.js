import React from 'react';

import Navigation from "../Navigation";

import './style.scss';


export default function Footer () {
    return (
        <footer className="footer">

            <div className="footer__nav">
                <Navigation/>
            </div>

            <div className="footer__content">

                <div className="footer__info">
                    <p className="footer__address">г. Самара, ул.Ново-Садовая, д. 163</p>
                    <p className="footer__contacts">тел. +7 (846) 248-08-78<br/>
                        e-mail: artdeco63@inbox.ru</p>
                </div>

                <div className="footer__instagram">
                    <a className="footer__instagram-icon" href="https://www.instagram.com/artdeco_63/"></a>
                    <span className="footer__instagram-text">artdeco_63</span>
                </div>

            </div>

            <p className="footer__copyright">© 2021 Art Deco</p>

        </footer>
    )
}