import React from 'react'

import Header from "../../components/Header/Header";
import Body from "../../components/Body/Body";
import Slider from "../../components/Slider/Slider";
import Bottom from "../../components/Bottom/Bottom";
import Footer from "../../components/Footer/Footer";
import '../../App.css';

const Home = () => {
    return (
        <div className='App'>
            <Header></Header>
            <Body></Body>
            <Slider></Slider>
            <Bottom></Bottom>
            <Footer></Footer>
        </div>
    )
}

export default Home