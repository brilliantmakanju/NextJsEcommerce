import React from 'react'
import { OurService } from '../Flashydeal/Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faIdCard, faShield, faTruckFast } from '@fortawesome/free-solid-svg-icons'

const Announc = () => {

    // {
    //     desc:"We offer competitive prices on our 100 million plus product any range",
    //     name: "24/7 Support",
    //     icon:"faHeadset"
    // },
    // {
    //     desc:"We offer competitive prices on our 100 million plus product any range",
    //     name: "Worldwide Deivery",
    //     icon:"faTruckFast"
    // },
    // {
    //     desc:"We offer competitive prices on our 100 million plus product any range",
    //     name: "Safe Payement",
    //     icon:"faIdCard"
    // },
    // {
    //     desc:"We offer competitive prices on our 100 million plus product any range",
    //     name: "Shop with Confidence",
    //     icon:"faShield"
    // }

    return (
        <>
            <section className="announc">
                <div className="container d_flex">
                    <div className="product" >
                        <div className="img icon-circle">
                            <FontAwesomeIcon icon={faHeadset} />
                        </div>
                        <h3>24/7 Support</h3>
                        <p>We offer competitive prices on our 100 million plus product any range</p>
                    </div>
                    <div className="product" >
                        <div className="img icon-circle">
                            <FontAwesomeIcon icon={faTruckFast} />
                        </div>
                        <h3>Worldwide Delivery</h3>
                        <p>We offer competitive prices on our 100 million plus product any range</p>
                    </div>
                    <div className="product" >
                        <div className="img icon-circle">
                            <FontAwesomeIcon icon={faIdCard} />
                        </div>
                        <h3>Shop with Confidence</h3>
                        <p>We offer competitive prices on our 100 million plus product any range</p>
                    </div>
                    <div className="product" >
                        <div className="img icon-circle">
                            <FontAwesomeIcon icon={faShield} />
                        </div>
                        <h3>Safe Payement</h3>
                        <p>We offer competitive prices on our 100 million plus product any range</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Announc