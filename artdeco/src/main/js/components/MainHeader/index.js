import React from 'react';

import Navigation from "../Navigation";

import './style.scss';


export default function MainHeader() {
    return (
        <header className="header">
            <nav className="header__container nav-extended">

                <Navigation />

                <div className="header__content nav-content center">
                    <span className="header__text nav-title">
                        Уникальные покрытия. <br/>
                        Уникальные решения
                    </span>
                </div>

            </nav>
        </header>
    )
}