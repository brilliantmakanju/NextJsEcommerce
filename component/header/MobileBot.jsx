import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHome, faMagnifyingGlass, faSearch, faShoppingCart, faStore, faUser } from '@fortawesome/free-solid-svg-icons'
import { BottomNavigation, BottomNavigationList, BottomNavigationUl } from '../Styles/header/MobileBot'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const MobileBot = () => {

    // const menu = [
    //     { title: "Home", path: '/', icon: 'faHome' },
    //     { title: "Wishlist", path: '/wishlist', icon: 'faHome' },
    //     { title: "Store", path: '/store', icon: 'faHome' },
    //     { title: "Cart", path: '/cart', icon: 'faHome' },
    //     { title: "Profile", path: '/profile', icon: 'faHome' }
    // ]

    const router = useRouter()

    return (
        <BottomNavigation>
            <BottomNavigationUl>
                <BottomNavigationList>
                    <FontAwesomeIcon icon={faSearch} />
                </BottomNavigationList>
                <BottomNavigationList>
                    <FontAwesomeIcon icon={faStore} />
                </BottomNavigationList>
                <Link href='/'>
                    <BottomNavigationList className={router.pathname === '/' ? 'activePage' : 'unactive'} >
                        <FontAwesomeIcon icon={faHome} />
                    </BottomNavigationList>
                </Link>
                <Link href='cart' >
                    <BottomNavigationList  className={router.pathname === '/cart' ? 'activePage' : 'unactive'} >
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </BottomNavigationList>
                </Link>
                <Link href='user' >
                    <BottomNavigationList className={router.pathname === '/user' ? 'activePage' : 'unactive'} >
                        <FontAwesomeIcon icon={faUser} />
                    </BottomNavigationList>
                </Link>

            </BottomNavigationUl>
        </BottomNavigation>
    )
}

export default MobileBot