import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const Slide = dynamic(() => import('../component/Home/Slide'))
const Categories = dynamic(() => import('../component/Home/Categories'))
const FlashDeal = dynamic(() => import('../component/Home/Flashydeal/FlashDeal'))
const TopCate = dynamic(() => import('../component/Home/TopCate/TopCate'))
const NewArrival = dynamic(() => import('../component/Home/NewArrivals/NewArrival'))
const Discount = dynamic(() => import('../component/Home/Discount/Discount'))
const Store = dynamic(() => import('../component/Home/PhoneStore/Store'))


export default function Home() {

  return (
    <div >
      <Head>
        
        <title>Ecommerce</title>
        <link rel="icon" href="assest/LoginSidePic.jpeg" />
      </Head>
      <section className="home" style={{ marginTop: "10px", marginBottom: "10px", background: '#FFB423' }} >
        <div className="container d_flex">
          <Categories />
          <Slide />
        </div>
      </section>
      <main>
        <FlashDeal />
        <div className="desktop">
          <TopCate />
          <NewArrival />
          <Discount />
          <Store />
          {/* <Announc /> */}
        </div>
        <div className="mobile">
          Hellos
        </div>
      </main>
    </div>
  )
}
