import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SearchBox, SearchNavIcon, SearchSection } from '../Styles/header/Search'
import { faBars, faSearch, faShoppingCart, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import { Nav, NavLi, NavLinks } from '../Styles/header/NavBar'

const Search = () => {

    const [MobileMenu, setMobileMenu] = useState(false)

    const [fixed, setFixed] = useState(false)

    const FixedChange = () => {
        if (window.scrollY >= 100) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", FixedChange)
    }, [])

    return (
        <>
            {/* <NavLinks>
                <Nav className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize displayNone"}>
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
            </NavLinks> */}
            <SearchSection className={fixed ? 'activeNav' : 'search'} >
                <div className="container c_flex">
                    <div className="logo width">
                        <h1><span className="D_logo">D</span><span className="arb_logo">arb</span><span className='y_logo'>y</span></h1>
                    </div>
                </div>
                <SearchBox className='f_flex searchDiv'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder='Search and Hit Enter.......' />
                    <span>All Category</span>
                </SearchBox>
                <SearchNavIcon className='f_flex width ' id='SearchNavIcon'>
                    <Link href='user'>
                        <li className="user">
                            <FontAwesomeIcon icon={faUser} />
                        </li>
                    </Link>
                    <Link href='cart'>
                        <li className="Cart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span></span>
                        </li>
                    </Link>
                    {/* <button className='mobilemenu-toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                        {MobileMenu ?
                            <FontAwesomeIcon icon={faTimes} className="close home-btn" /> :
                            <FontAwesomeIcon icon={faBars} className="open" />
                        }</button> */}
                </SearchNavIcon>
            </SearchSection>
        </>
    )
}

export default Search