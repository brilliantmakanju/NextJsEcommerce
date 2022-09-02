import { faBagShopping, faBorderAll, faChevronDown, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavCont, NavDownCategory, NavDownCont, NavDownHelpLinkCont, NavDownHelpLinks, NavMobileLine1, NavMobileLine2, NavMobileLine3, NavMobileToggle, NavMobileToggleInput, NavTopCont, NavTopLink, NavTopLinkCont, NavTopLinkDot, NavTopLogo, NavTopSearch, NavTopSearchBtn, NavTopSearchInput } from '../../Stylings/includes/Nav'

const Nav = () => {

    const [openNav, setOpenNav] = useState(false)

    const OpenNav = () => {
        setOpenNav(!openNav)
    }

  return (
    <NavCont>
        <NavTopCont>
            <NavTopLogo>
                Darby
            </NavTopLogo>
            <NavTopSearch>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <NavTopSearchInput type='search' placeholder='Search and hit enter...' />
                <NavTopSearchBtn type='submit' value='Search' />
            </NavTopSearch>
            <NavTopLinkCont>
                <NavTopLink>
                    <FontAwesomeIcon icon={faUser} />
                </NavTopLink>
                <NavTopLink>
                    <FontAwesomeIcon icon={faBagShopping} />
                    <NavTopLinkDot />
                </NavTopLink>
            </NavTopLinkCont>
        </NavTopCont>
        <NavDownCont>
            <NavDownCategory>
                <FontAwesomeIcon icon={faBorderAll} /> Category <FontAwesomeIcon icon={faChevronDown} />
            </NavDownCategory>
            <NavMobileToggle className={openNav ? "sidebar-open" : "sidebar-close"} onClick={OpenNav} >
                <NavMobileLine1 id='bar1' />
                <NavMobileLine2 id='bar2' />
                <NavMobileLine3 id='bar3' />
            </NavMobileToggle>
            <NavDownHelpLinkCont>
                <NavDownHelpLinks>
                    Home
                </NavDownHelpLinks>
                <NavDownHelpLinks>
                    Store
                </NavDownHelpLinks>
                <NavDownHelpLinks>
                    About Us
                </NavDownHelpLinks>
                <NavDownHelpLinks>
                    Contact Us
                </NavDownHelpLinks>
            </NavDownHelpLinkCont>
        </NavDownCont>
    </NavCont>
  )
}

export default Nav