import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { HeadCont, HeadConts, HeadLeft, HeadRight } from '../Styles/header/Head'

const Head = () => {
    return (
        <HeadConts>
            <HeadCont className='d_flex'>
                <div>
                    <FontAwesomeIcon icon={faPhone} />
                    <label>+23490-1557-3136</label>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <label>darbyecommerce@darbyecommerce.com</label>
                </div>
                <div>
                    <label>Theme FAQ's</label>
                    <label>Need Helps</label>
                </div>
            </HeadCont>
        </HeadConts>
    )
}

export default Head