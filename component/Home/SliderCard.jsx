import React from 'react'
import 'slick-carousel/slick/slick.css'
import Slider from 'react-slick/lib/slider'
import 'slick-carousel/slick/slick-theme.css'

const NextArrow = (props) => {
  return <div style={{ display: "none" }} ></div>
}

const PrevArrow = (props) => {
  return <div style={{ display: "none" }} ></div>
}


const SliderCard = () => {

  const Slidedata = [
    {
      slideTextH1: '50% discount on first purchase',
      slideTextP: 'Join now and but the most relaxing massage chair Join now and but the most relaxing massage chair Join now and but the most relaxing massage chair',
      slideImg: 'assest/Carousel/shoe4.png'
    },
    {
      slideTextH1: '50% discount on first purchase',
      slideTextP: 'Join now and but the most relaxing massage chair',
      slideImg: 'assest/Carousel/shoe5.png'
    },
    {
      slideTextH1: '50% discount on first purchase',
      slideTextP: 'Join now and but the most relaxing massage chair',
      slideImg: 'assest/Carousel/shoe7.png'
    },
    {
      slideTextH1: '50% discount on first purchase',
      slideTextP: 'Join now and but the most relaxing massage chair',
      slideImg: 'assest/Carousel/shoe9.png'
    },
    {
      slideTextH1: '50% discount on first purchase',
      slideTextP: 'Join now and but the most relaxing massage chair',
      slideImg: 'assest/Carousel/shoe1.png'
    },
    {
      slideTextH1: '50% discount on first purchase',
      slideTextP: 'Join now and but the most relaxing massage chair',
      slideImg: 'assest/Carousel/shoe12.png'
    }
  ]

  const settings = {
    speed: 500,
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    sliderToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    }
  }

  return (
    <Slider {...settings} >
      {
        Slidedata.map((value, index) => (
          <div className="box d_flex top" id='homeSlidecont' key={index}>
            <div className="left" id='homeSlideText'>
              <h1>{value.slideTextH1}</h1>
              <p>{value.slideTextP}</p>
              <button>View Collections</button>
            </div>
            <div className="right" id='homeSlideImg'>
              <img src={value.slideImg} alt={value.slideTextH1} />
            </div>
          </div>
        ))
      }
    </Slider>
  )
}

export default SliderCard