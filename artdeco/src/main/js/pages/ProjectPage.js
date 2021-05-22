import React from 'react';

import DefaultHeader from "../components/DefaultHeader";
import Footer from "../components/Footer";

import '../../resources/static/style.css';


export const ProjectPage = () => {
    return (
        <>
            <DefaultHeader text="Наши проекты" />

            <div>
                <h1>Наши проекты</h1>
            </div>
            <div className="container1">
                <div className="box1">
                    <img alt src="img/1/1.jpg"/>

                </div>
                <div className="box1">
                    <img alt src="img/1/4.jpg"/>

                </div>
                <div className="box1">
                    <img alt src="img/1/8.jpg"/>

                </div>
                <div className="box1">
                    <img alt src="img/1/6.jpg"/>

                </div>
                <div className="box1">
                    <img alt src="img/2.jpg"/>

                </div>
                <div className="box1">
                    <img alt src="img/4.jpg"/>

                </div>
            </div>

            <Footer />
        </>

    )
}