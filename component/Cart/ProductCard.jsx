import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { CartProduct } from '../Home/Flashydeal/Data'

const ProductCard = () => {

    const [cartItems, setCartItem] = useState(CartProduct)

    const totalPrice = cartItems === null ? 0 : cartItems.reduce((price, item) => price + item.quantity * item.price, 0)

    // useEffect(() => {
    //     window.addEventListener('storage', () => {
    //         const cartProductUpdate = localStorage.getItem("darbyEcommCartItem")
    //         setCartItem(JSON.parse(cartProductUpdate))
    //     })
    //     const cartProducts = localStorage.getItem("darbyEcommCartItem")
    //     setCartItem(JSON.parse(cartProducts))
    // })

    // setCartItem(CartProduct)

    let findProduct
    let index

    const IncQtay = (product) => {
        findProduct = cartItems.find((products) => products.id === product.id)

        if (findProduct) {
            setCartItem(cartItems.map((products) => (products.id === product.id ? { ...findProduct, quantity: findProduct.quantity + 1 } : products)))
        } else {
            setCartItem([...cartItems, { ...product, quantity: 1 }])
        }
    }

    const DecQtay = (product) => {
        findProduct = cartItems.find((products) => products.id === product.id)

        if (findProduct.quantity !== 1) {
            setCartItem(cartItems.map((products) => (products.id === product.id ? { ...findProduct, quantity: findProduct.quantity - 1 } : products)))
        }
    }

    const DelProductFromCart = (product) => {
        findProduct = cartItems.find((products) => products.id === product.id)

        const removeItem = cartItems.filter(products => products.id !== product.id)
        setCartItem(removeItem)
    }

    return (
        <>
            <div className="cart-details">

                {
                    cartItems.length === 0 ?
                        <h1 style={{ color: "black" }} className="no-items product"> No Item are add in cart click here to visit <Link href='/' >Store</Link></h1>
                        :
                        cartItems.map((value) => {

                            const productQuant = value.price * value.quantity

                            return (
                                <div className="cart-list product d_flex" key={value.id}>
                                    <div className="img">
                                        <img src={value.productimg} alt={value.name} />
                                    </div>
                                    <div className="card-detail">
                                        <h3 style={{ fontSize: "21px", fontWeight: "500", marginTop: "20px" }} >{value.name}</h3>
                                        <h4 style={{ fontSize: "15px", fontWeight: "400", marginTop: "50px", color: "gray" }}>{value.price}.00 * {value.quantity}<span style={{ marginLeft: "20px", fontWeight: "500", color: "red" }}>${productQuant}.00 </span> </h4>
                                    </div>
                                    <div className="cart-item-function">
                                        <div className="removeCart" style={{
                                            top: "-1px",
                                            right: "-1px",
                                            width: "50px",
                                            height: "35px",
                                            paddingTop: "10px",
                                            position: "absolute",
                                        }}>
                                            <button onClick={() => DelProductFromCart(value)} style={{
                                                width: "50px",
                                                height: "50px",
                                                padding: "10px",
                                                border: "2px solid white",
                                                boxShadow: "1px 1px 10px 1px black"
                                            }}>
                                                <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faXmark} />
                                            </button>
                                        </div>

                                        <div className="cartControl d_flex">
                                            <button className="incCart" onClick={() => IncQtay(value)} >
                                                <FontAwesomeIcon icon={faPlus} />
                                            </button>

                                            <button className="decCart" onClick={() => DecQtay(value)}>
                                                <FontAwesomeIcon icon={faMinus} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cart-item-price">

                                    </div>
                                </div>
                            )
                        })
                }
            </div>
            <div className="cart-total product">
                <h2>Cart Summary</h2>
                <div className="d_flex">
                    <h4>Total Price : </h4>
                    <h3>${totalPrice}.00</h3>
                </div>
            </div>
        </>
    )
}

export default ProductCard