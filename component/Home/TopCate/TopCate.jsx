import { faArrowRight, faBorderAll, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { TopCateCont } from '../../Styles/Home/TopCate'
import TopCart from './TopCart'

const TopCate = () => {
  return (
    <TopCateCont >
        <div className="container">
            <div className="heading d_flex">
                <div className="heading-left row f_flex">
                    <FontAwesomeIcon icon={faBorderAll} />
                    <h2>Top Category</h2>
                </div>
                <div className="heading-right row">
                    <span>View all </span> <FontAwesomeIcon icon={faCaretRight} />
                </div>
            </div>
            <TopCart />
        </div>
    </TopCateCont>
  )
}

export default TopCate