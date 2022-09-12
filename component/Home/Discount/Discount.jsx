import React from 'react'
import DiscountCard from './DCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBorderAll, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { DicountCont } from '../../Styles/Home/Discount'

const Discount = () => {
    return (
        <DicountCont >
            <div className="container">
                <div className="heading d_flex">
                    <div className="heading-left row f_flex">
                        <FontAwesomeIcon icon={faBorderAll} />
                        <h2>Top Discount</h2>
                    </div>
                    <div className="heading-right row">
                        <span>View all </span> <FontAwesomeIcon icon={faCaretRight} />
                    </div>
                </div>
                <DiscountCard />
            </div>
        </DicountCont>
    )
}

export default Discount