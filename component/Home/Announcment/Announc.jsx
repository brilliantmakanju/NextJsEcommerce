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
                        <p>We offer 24/7 Customer Care Support for you our Users</p>
                    </div>
                    <div className="product" >
                        <div className="img icon-circle">
                            <FontAwesomeIcon icon={faTruckFast} />
                        </div>
                        <h3>Worldwide Delivery</h3>
                        <p>We make Delivery WorldWide so Shop with Us From Any Part Of The World</p>
                    </div>
                    <div className="product" >
                        <div className="img icon-circle">
                            <FontAwesomeIcon icon={faIdCard} />
                        </div>
                        <h3>Shop with Confidence</h3>
                        <p>Shop with Confidence on Darby as you get 20% discount on  your first purchase</p>
                    </div>
                    <div className="product" >
                        <div className="img icon-circle">
                            <FontAwesomeIcon icon={faShield} />
                        </div>
                        <h3>Safe Payement</h3>
                        <p>We offer encrypted Payement Method for our users</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Announc