import React from 'react'
import './Slider.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'

const Slider = () => {
    return (
        <section className="s-wrapper">
            <div className="paddings innerWidth s-container">
                <div className=" flexColStart s-head">
                    <span className="titleText">Your quotes library</span>
                </div>

                {/* slide show */}
                <Swiper {...sliderSettings}>
                    <SliderButtons></SliderButtons>
                    {data.map((quote, i) => (
                        <SwiperSlide key={i}>
                            <div className="s-quote flexColStart">
                                <span className="secondaryText">{quote.quotes}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Slider
const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter s-button">
            <button className='button' onClick={() => swiper.slidePrev()}>&lt;</button>
            <button className='button' onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}