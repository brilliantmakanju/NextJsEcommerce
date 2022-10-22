import { ServerStyleSheet } from 'styled-components'
import Document, { Head, Html, Main, NextScript } from 'next/document'

// 
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" >
                < Head>
                    <link rel='manifest' href='/mainfest.json' />
                    <link
                        rel="preload"
                        href="/fonts/QwitcherGrypen-Bold.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/QwitcherGrypen-Regular.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin=""
                    />
                </ Head >
                <body>
                    < Main />
                    < NextScript />
                </ body >
            </ Html >
        )
    }
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(< App {...props} />),
                })
            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
}