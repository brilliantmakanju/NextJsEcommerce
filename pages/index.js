import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const Slide = dynamic(() => import('../component/Home/Slide'))
const Slider = dynamic(() => import('../component/UI/Products/Slider'))
const Categories = dynamic(() => import('../component/Home/Categories'))
const Store = dynamic(() => import('../component/Home/PhoneStore/Store'))
const TopCate = dynamic(() => import('../component/Home/TopCate/TopCate'))
const Discount = dynamic(() => import('../component/Home/Discount/Discount'))
const FlashDeal = dynamic(() => import('../component/Home/Flashydeal/FlashDeal'))
const NewArrival = dynamic(() => import('../component/Home/NewArrivals/NewArrival'))


export default function Home() {

  return (
    <div >
      <Head>

        <title>Ecommerce</title>
        <link rel="icon" href="NewAssest/hoobank.svg" />
      </Head>

      <Slider />

    </div>
  )
}



// {/* <section className="home" style={{ marginTop: "10px", marginBottom: "10px", background: '#FFB423' }} >
//   <div className="container d_flex">
//     <Categories />
//     <Slide />
//   </div>
// </section>
// <main>
//   <FlashDeal />
//   <div className="desktop">
//     <TopCate />
//     <NewArrival />
//     <Discount />
//     <Store />
//     {/* <Announc /> */}
//   {/* </div> */}
// {/* //   <div className="mobile">
// //     Hellos
// //   </div>
// // </main> */} 