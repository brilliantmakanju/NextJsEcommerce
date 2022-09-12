import React, { useEffect, useState } from 'react'
import Head from './Head'
import NavBar from './NavBar'
import Search from './Search'

const Header = () => {

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
        <div>
            <Head />
            <Search />
            <NavBar />
        </div>
    )
}

export default Header