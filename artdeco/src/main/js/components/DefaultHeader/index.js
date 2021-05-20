import React from 'react';

import Navigation from "../Navigation";

import './style.scss';


export default function DefaultHeader ({ text }) {
    return (
        <header className="header-default">
            <nav className="header-default__container nav-extended">

                <Navigation />

                <div className="header-default__content nav-content">
                    <h1 className="header-default__text nav-title">{ text }</h1>
                </div>

            </nav>
        </header>
    );
}