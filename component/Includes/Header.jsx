import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { HeaderCont, HeaderLeftCont, HeaderLeftLink, HeaderRightCont, HeaderRightLink } from '../../Stylings/includes/Header'

const Header = () => {
  return (
    <HeaderCont>
        <HeaderLeftCont>
            <HeaderLeftLink>
                <FontAwesomeIcon icon={faPhone} /> +234-901-557-3136
            </HeaderLeftLink>
            <HeaderLeftLink>
                <FontAwesomeIcon icon={faEnvelope} /> darbyecommerce@darbyecommerce.com
            </HeaderLeftLink>
        </HeaderLeftCont>
        <HeaderRightCont>
            <HeaderRightLink>
                Need Helps
            </HeaderRightLink>
            <HeaderRightLink>
                Theme FAQ'S
            </HeaderRightLink>
        </HeaderRightCont>
    </HeaderCont>
  )
}

export default Header