import React from 'react';

import Navigation from "../Navigation";

import './style.scss';


export default function MainHeader() {
    return (
        <header className="header">
            <nav className="header__container nav-extended">

                <Navigation />

                <div className="header__content nav-content center">
                    <p className="header__text nav-title">
                        Уникальные покрытия. <br/>
                        Уникальные решения
                    </p>
                </div>

            </nav>
        </header>
    )
}