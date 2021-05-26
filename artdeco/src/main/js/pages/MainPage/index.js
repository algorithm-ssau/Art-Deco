import React from 'react';

import MainHeader from "../../components/MainHeader";
import Description from "./Description";
import Description2 from "./Description2";
import Feature1 from "./Feature1";
import Feature3 from "./Feature3";
import Feature2 from "./Feature2";
import FeatureTest from './FeatureTest';
import Review from './Review';
import Offer from "./Offer";
import Footer from "../../components/Footer";

import '../../../resources/static/style.css';


export const MainPage = () => {
    return (
        <>
            <MainHeader/>

            <main>
                {/*<Description />*/}
                <Description2 />

                <Feature1 />
                <Feature2 />
                <Feature3 />

                <Offer />
                <Review />

            </main>

            <Footer/>
        </>
    );
}