import React from 'react'
import Cate from './Cate'
import StoreCard from './StoreCard'
import { PhoneStoreCont } from '../../Styles/Home/StorePh'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBorderAll, faCaretRight } from '@fortawesome/free-solid-svg-icons'

const Store = () => {
    return (
        <PhoneStoreCont >
            <div className="container d_flex">
                <Cate />

                <div className="contentWidth">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <h2>Mobile Phones</h2>
                        </div>
                        <div className="heading-right row">
                            <span>View all </span> <FontAwesomeIcon icon={faCaretRight} />
                        </div>
                    </div>
                    <div className="product-content d_flex ">
                        <StoreCard />
                    </div>
                </div>
            </div>
        </PhoneStoreCont>
    )
}

export default Store