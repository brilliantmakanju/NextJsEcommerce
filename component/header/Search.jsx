import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SearchBox, SearchNavIcon, SearchSection } from '../Styles/header/Search'
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

const Search = () => {

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
            <SearchSection className={fixed  ? 'activeNav' :'search'} >
                <div className="container c_flex">
                    <div className="logo width">
                        <h1><span className="D_logo">D</span><span className="arb_logo">arb</span><span className='y_logo'>y</span></h1>
                    </div>
                </div>
                <SearchBox className='f_flex'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder='Search and Hit Enter.......' />
                    <span>All Category</span>
                </SearchBox>
                <SearchNavIcon className='f_flex width'>
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
                </SearchNavIcon>
            </SearchSection>
        </>
    )
}

export default Search