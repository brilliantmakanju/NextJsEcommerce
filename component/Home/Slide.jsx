import React from 'react'
import SliderCard from './SliderCard'
import { SliderCardCont } from '../Styles/Home/SliderCard'

const Slide = () => {
    return (
        <SliderCardCont className='homeSlide contentWidth'>
            <div className='container sliderCont'>
                <SliderCard />
            </div>
        </SliderCardCont>
    )
}

export default Slide