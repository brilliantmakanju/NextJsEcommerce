import { faBagShopping, faBorderAll, faChevronDown, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment, useState } from 'react'
import { NavCont, NavDownCategory, NavDownCont, NavDownHelpLinkCont, NavDownHelpLinks, NavMobileLine1, NavMobileLine2, NavMobileLine3, NavMobileToggle, NavMobileToggleViews, NavTopCont, NavTopLink, NavTopLinkCont, NavTopLinkDot, NavTopLogo, NavTopSearch, NavTopSearchBtn, NavTopSearchInput } from '../../Stylings/includes/Nav'

const Nav = () => {

    const [openNav, setOpenNav] = useState(false)

    const OpenNav = () => {
        setOpenNav(!openNav)
    }

    return (
        <Fragment>
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
                        <NavMobileLine1 />
                        <NavMobileLine2 />
                        <NavMobileLine3 />
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
            <NavMobileToggleViews id={openNav ? 'opened' : 'closed'}>
                s
            </NavMobileToggleViews>
        </Fragment>
    )
}

export default Nav