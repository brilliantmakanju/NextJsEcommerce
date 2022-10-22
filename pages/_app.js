import 'animate.css'
import '../public/Global.css'
import '../public/Animateds.scss'
import Header from '../component/header/Header';
import { Fragment, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Footer from '../component/header/Footer';
import MobileBot from '../component/header/MobileBot';
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
            <Header />
            <style jsx global>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                html,
                body {
                    user-select:none;
                    overflow-x: hidden;
                    background: rgb(235, 230, 230);
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                }

                a{
                    text-decoration:none;
                    cursor:pointer;
                }
            `}</style>
            <div style={{ padding: "0 10px" }}>
                <Component {...pageProps} >
                </Component>
            </div>
            <MobileBot />
            <Footer />
        </Fragment>
    )
}