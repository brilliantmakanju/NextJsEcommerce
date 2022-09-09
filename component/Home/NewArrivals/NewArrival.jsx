import { faBorderAll, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NewArrivalCont } from '../../Styles/Home/NewArrivals'
import NewArrivalCard from './NewArrivalCard'

const NewArrival = () => {
    return (
        <NewArrivalCont>
            <div className="container">
                <div className="heading d_flex">
                    <div className="heading-left row f_flex">
                        <FontAwesomeIcon icon={faBorderAll} />
                        <h2>New Arrivals</h2>
                    </div>
                    <div className="heading-right row">
                        <span>View all </span> <FontAwesomeIcon icon={faCaretRight} />
                    </div>
                </div>
                <NewArrivalCard />
            </div>
        </NewArrivalCont>
    )
}

export default NewArrival