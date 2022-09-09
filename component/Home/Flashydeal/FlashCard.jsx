import { CartProduct, FlashyProduct } from './Data'
import React, { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import Slider from 'react-slick/lib/slider'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong, faHeart, faPlus, faStar } from '@fortawesome/free-solid-svg-icons'

const NextArrow = (props) => {
    const { onClick } = props
    return <div className='Control_btn_slider next' onClick={onClick}>
        <button className='next'>
            <FontAwesomeIcon icon={faArrowRightLong} />
        </button>
    </div>
}

const PrevArrow = (props) => {
    const { onClick } = props
    return <div className='Control_btn_slider prev' onClick={onClick}>
        <button className='prev'>
            <FontAwesomeIcon icon={faArrowLeftLong} />
        </button>
    </div>
}

const FlashCard = () => {

    const productItem = FlashyProduct

    const cartItemsProduct = CartProduct

    const [likeCount, setLikeCount] = useState(0)

    const increaseLike = () => {
        setLikeCount(likeCount + 1)
    }

    const [cartItems, setCartItems] = useState([])


    useEffect(() => {
        // set
        addToCart
        // return addToCart
    }, [])

    const addToCart = (product) => {
        let cartItemArray = cartItemsProduct
        setCartItems(localStorage.setItem('darbyEcommCartItem', [JSON.stringify(cartItemArray)]))
    }

    const settings = {
        speed: 500,
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 5,
        sliderToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

    return (
        <>

            {cartItems}

            <Slider {...settings} >
                {
                    productItem.map((value) => (
                        <div className="productSlides box">
                            <div className="product mtop">
                                <div className="img">
                                    <span style={{ fontSize: ".8em", fontWeight: "700", position:"absolute", top:"5px", left:"5px", boxShadow:"1px 1px 1px 1px black", padding:"5px", background:"black", color:"yellow", borderRadius:"10px", border:"2px solid white" }} className='discount'>
                                        {
                                            value.discount
                                        }% off
                                    </span>
                                    <img src={value.productimg} alt={value.name} />
                                    <div className="rate">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                                <div className="productDetails">
                                    <div className="product-like">
                                        <label>{likeCount}</label><br />
                                        <FontAwesomeIcon icon={faHeart} onClick={increaseLike} />
                                    </div>
                                    <h3>{value.name}</h3>
                                    <div className="price">
                                        <h4 style={{ textDecoration: "line-through" }}>{value.price}.00</h4>
                                        <button onClick={() => addToCart(value)} ><FontAwesomeIcon icon={faPlus} /></button>
                                    </div>
                                    <h4> New Price : {value.price - (value.price * (value.discount / 100))}.00</h4>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </>
    )
}

export default FlashCard