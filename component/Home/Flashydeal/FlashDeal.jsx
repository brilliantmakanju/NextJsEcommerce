import React from 'react'
import FlashCard from './FlashCard'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FlashDeal = () => {
    return (
        <section className='flash background'>
            <div className='container ' id='producstSlideCont'>
                <div className='heading f_flex'>
                    <FontAwesomeIcon icon={faBolt} />
                    <h1>Flash Deals</h1>
                </div>
                <FlashCard />
            </div>
        </section>
    )
}

export default FlashDeal