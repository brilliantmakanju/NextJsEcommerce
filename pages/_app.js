import 'animate.css'
import '../public/Styles.css'
import '../public/Animateds.scss'
import { Fragment, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from '../component/Includes/Header';
import Nav from '../component/Includes/Nav';

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'QwitcherGrypen-Regular';
    src: url('/fonts/QwitcherGrypen-Regular.ttf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'QwitcherGrypen-Bold';
    src: url('/fonts/QwitcherGrypen-Bold.ttf');
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }
`;

export default function MyApp({ Component, pageProps }) {

    return (
        <Fragment>
            <GlobalStyle />
            <Header />
            <Nav />
            <style jsx global>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                html,
                body {
                    user-select:none;
                    background: white;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                }

                a{
                    text-decoration:none;
                    cursor:pointer;
                }
            `}</style>
            <Component {...pageProps} >
            </Component>
        </Fragment>
    )
}