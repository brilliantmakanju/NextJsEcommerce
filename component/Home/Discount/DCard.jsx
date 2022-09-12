import React from 'react'
import Slider from 'react-slick'
import { TopDicountProduct } from '../Flashydeal/Data'

const DiscountCard = () => {

    const settings = {
        speed: 1000,
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 5,
        sliderToScroll: 2,
    }

    return (
        <Slider {...settings}>
            {
                TopDicountProduct.map((value, index) => {
                    return (
                        <div className="product">
                            <div className="box" key={index}>
                                <div className="img">
                                    <img src={value.productimg} alt={value.name} width='100%' onBlur={value.productimg} />
                                </div>
                                <div className="info">
                                    <div className="info1">
                                        <h4>{value.name}</h4>
                                        <span>Old Price : ${value.price}</span><br />
                                        <span>Discount Price : ${value.price - (value.price * (value.discount / 100))}</span>
                                    </div>
                                    <div className="info2">
                                        <span>{value.discount}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
    )
}

export default DiscountCard