import React from 'react'
import Slider from 'react-slick'
import { NewArrivalProduct } from '../Flashydeal/Data'

const NewArrivalCard = () => {

    const settings = {
        speed: 500,
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 5,
        sliderToScroll: 1,
    }

    return (
        <Slider {...settings}>
        {
            NewArrivalProduct.map((value, index) => {
                return (
                    <div className="content grid product">
                        <div className="box" key={index}>
                            <div className="img">
                                <img src={value.productimg} alt={value.name} onBlur={value.productimg} />
                            </div>
                            <h4>{value.name}</h4>
                            <span>{value.price}</span>
                        </div>
                    </div>
                )
            })
        }
        </Slider>
    )
}

export default NewArrivalCard