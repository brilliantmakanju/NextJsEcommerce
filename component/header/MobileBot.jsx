import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHome, faShoppingCart, faStore, faUser } from '@fortawesome/free-solid-svg-icons'
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
            {/* {
                menu.map((item, index) => {
                    return (
                        <BottomNavigationUl>
                            <Link key={index} href={item.path} >
                                <BottomNavigationList>
                                    <FontAwesomeIcon icon={item.icon} /> <span>{item.title}</span>
                                </BottomNavigationList>
                            </Link>
                        </BottomNavigationUl>
                    )
                })
            } */}
            {
                router.pathname === '/'
                    ?
                    <div className='rounderNav' ></div>
                    :
                    <div className='normalNav' />
            }
            <BottomNavigationUl>
                <Link href='/'>
                    <BottomNavigationList>
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </BottomNavigationList>
                </Link>
                <BottomNavigationList>
                    <FontAwesomeIcon icon={faHeart} /> <span>Wishlist</span>
                </BottomNavigationList>
                <BottomNavigationList>
                    <FontAwesomeIcon icon={faStore} /> <span>Store</span>
                </BottomNavigationList>
                <BottomNavigationList>
                    <FontAwesomeIcon icon={faShoppingCart} /> <span>Cart</span>
                </BottomNavigationList>
                <BottomNavigationList>
                    <FontAwesomeIcon icon={faUser} /> <span>Profile</span>
                </BottomNavigationList>

            </BottomNavigationUl>
        </BottomNavigation>
    )
}

export default MobileBot