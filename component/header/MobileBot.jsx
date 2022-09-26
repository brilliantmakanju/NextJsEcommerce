import { faHeart, faHome, faShoppingCart, faStore, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { BottomNavigation, BottomNavigationList, BottomNavigationUl } from '../Styles/header/MobileBot'

const MobileBot = () => {
  return (
    <BottomNavigation>
        <BottomNavigationUl>
            <BottomNavigationList>
                <FontAwesomeIcon icon={faHome} /> <span>Home</span>
            </BottomNavigationList>
            <BottomNavigationList>
                <FontAwesomeIcon icon={faHeart} /> <span>Wishlist</span>
            </BottomNavigationList>
            <BottomNavigationList>
                <FontAwesomeIcon icon={faStore} /> <span>Store</span>
            </BottomNavigationList>
            <BottomNavigationList>
                <FontAwesomeIcon icon={faUser} /> <span>Profile</span>
            </BottomNavigationList>
            <BottomNavigationList>
                <FontAwesomeIcon icon={faShoppingCart} /> <span>Cart</span>
            </BottomNavigationList>
        </BottomNavigationUl>
    </BottomNavigation>
  )
}

export default MobileBot