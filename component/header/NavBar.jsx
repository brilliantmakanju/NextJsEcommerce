import { faBars, faBorderAll, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'
import { Nav, NavCategory, NavHeader, NavLi, NavLinks } from '../Styles/header/NavBar'

const NavBar = () => {

    const [MobileMenu, setMobileMenu] = useState(true)

    return (
        <NavHeader>
            <div className="container d_flex">
                <NavCategory className='d_flex'>
                    <span>
                        <FontAwesomeIcon icon={faBorderAll} />
                    </span>
                    <h4>Categories<FontAwesomeIcon icon={faChevronDown} /></h4>
                </NavCategory>
                <NavLinks>
                    <Nav className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"}>
                        <Link href='/'>
                            <NavLi>Home</NavLi>
                        </Link>
                        <Link href='/'>
                            <NavLi>Store</NavLi>
                        </Link><Link href='/'>
                            <NavLi>About</NavLi>
                        </Link>
                        <Link href='/'>
                            <NavLi>Contact</NavLi>
                        </Link>
                        <Link href='/'>
                            <NavLi>Cart</NavLi>
                        </Link>
                    </Nav>
                    <button className='mobilemenu-toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                        {MobileMenu ?
                            <FontAwesomeIcon icon={faTimes} className="close home-btn" /> :
                            <FontAwesomeIcon icon={faBars} className="open" />
                        }</button>
                </NavLinks>
            </div>
        </NavHeader>
    )
}

export default NavBar