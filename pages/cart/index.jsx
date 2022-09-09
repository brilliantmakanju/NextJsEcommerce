import Head from 'next/head'
import React from 'react'
import Products from '../../component/Cart/Products'

const Cart = () => {
  return (
    <>
      <Head>
        <title>Cart</title>
        <link rel="icon" href="assest/LoginSidePic.jpeg" />
      </Head>
      <Products />
    </>
  )
}

export default Cart