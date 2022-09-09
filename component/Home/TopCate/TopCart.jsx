import React from 'react'
import Slider from 'react-slick/lib/slider'
import { TopProduct } from '../Flashydeal/Data'



const TopCart = () => {

    const settings = {
        speed: 700,
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        sliderToScroll: 1,
    }

    return (
        <Slider {...settings}>
            {
                TopProduct.map((value, index) => {
                    return (
                        <div className="topCate">
                            <div className="topCateBox box product" key={index}>
                                <div className="nametop d_flex">
                                    <span
                                        className="tleft"
                                        style={{
                                            border: "2px solid white"
                                        }}
                                    >{value.cate}</span>
                                    <span
                                        className="tright"
                                        style={{
                                            border: "2px solid black",
                                            background: "yellow",
                                            color: "black",
                                            right: "0",
                                        }}
                                    >{value.desc}</span>
                                </div>
                                <div className="img">
                                    <img src={value.productimg} alt={value.cate} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
    )
}

export default TopCart