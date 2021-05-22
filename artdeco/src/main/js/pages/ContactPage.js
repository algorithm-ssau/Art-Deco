import React from 'react';

import DefaultHeader from "../components/DefaultHeader";
import Footer from "../components/Footer";

import '../../resources/static/style.css';


export const ContactPage = () => {
    return (
        <>
            <DefaultHeader text="Контакты"/>

            <div className="container">
                <iframe src="https://www.google.com/maps/d/embed?mid=1F_Qrm-aMVdCb0_d2sA55u9iaCz1ENHti" width="640"
                        height="480"></iframe>


            </div>

           <Footer/>
        </>
    )
}