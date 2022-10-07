import { faApplePay, faAppStoreIos, faGooglePlay, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container grid2">
                    <div className="box">
                        <Link href='/'>
                            <h1><span className="D_logo">D</span><span className="arb_logo">arb</span><span className='y_logo'>y</span></h1>
                        </Link>
                        <p>Shopping Be Part Of Life</p>
                        <div className="icon d_flex">
                            <div className="img d_flex">
                                <FontAwesomeIcon icon={faGooglePlay} /><span>Google Play</span>
                            </div>
                            <div className="img d_flex">
                                <FontAwesomeIcon icon={faAppStoreIos} /><span>Apple Store</span>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <h2>About Us</h2>
                        <ul>
                            <li>
                                Careers
                            </li>
                            <li>
                                Our Stores
                            </li>
                            <li>
                                Terms & Conditions
                            </li>
                            <li>
                                Privacy Policy
                            </li>
                        </ul>
                    </div>

                    <div className="box">
                        <h2>Customer Care</h2>
                        <ul>
                            <li>
                                Help Center
                            </li>
                            <li>
                                How to Buy
                            </li>
                            <li>
                                Corporate & Bulk Purchasing
                            </li>
                        </ul>
                    </div>

                    <div className="box">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>
                                Email: (emailhere)
                            </li>
                            <li>
                                number
                            </li>
                        </ul>
                    </div>
                    <div className="socialLinkFooter2">
                        <ul >
                            <li><FontAwesomeIcon icon={faTwitter} /></li>
                            <li><FontAwesomeIcon icon={faTwitter} /></li>
                            <li><FontAwesomeIcon icon={faTwitter} /></li>
                            <li><FontAwesomeIcon icon={faTwitter} /></li>
                            <li><FontAwesomeIcon icon={faTwitter} /></li>
                        </ul>
                    </div>
                </div>

            </footer>
            <div className="socialLinkFooter">
                <ul >
                    <li><FontAwesomeIcon icon={faTwitter} /></li>
                    <li><FontAwesomeIcon icon={faTwitter} /></li>
                    <li><FontAwesomeIcon icon={faTwitter} /></li>
                    <li><FontAwesomeIcon icon={faTwitter} /></li>
                    <li><FontAwesomeIcon icon={faTwitter} /></li>
                </ul>
            </div>
        </>
    )
}

export default Footer