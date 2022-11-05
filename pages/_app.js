import 'animate.css'
import '../public/Global.css'
import '../public/Animateds.scss'
import styles from '../component/UI/style'
import Header from '../component/header/Header';
import Footer from '../component/header/Footer';
import MobileBot from '../component/header/MobileBot';
import { Fragment, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Nav from '../component/UI/Layout/Nav';
const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'QG-Regular';
    src: url('/fonts/QwitcherGrypen-Regular.ttf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'QG-Bold';
    src: url('/fonts/QwitcherGrypen-Bold.ttf');
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }
`;

export default function MyApp({ Component, pageProps }) {

    return (
        <Fragment>
            {/* <Head>
                <link rel='manifest' href='/mainfest.json' />
            </Head> */}
            <GlobalStyle />
            {/* <Header /> */}
            <div className='bg-primary w-full overflow-hidden'>
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Nav />
                    </div>
                </div>
            </div>
            

            <div style={{ padding: "0 10px" }}>
                <Component {...pageProps} >
                </Component>
            </div>
            {/* <MobileBot />
            <Footer /> */}
        </Fragment>
    )
}