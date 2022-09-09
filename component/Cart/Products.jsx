import Link from 'next/link'
import React from 'react'
import { CartProduct } from '../Home/Flashydeal/Data'
import ProductCard from './ProductCard'

const Products = () => {

    const cartProduct = CartProduct

    return (
        <>
            <section className="cart-items">
                <div className="container d_flex">
                    <ProductCard />
                </div>
            </section>
        </>
    )
}

export default Products