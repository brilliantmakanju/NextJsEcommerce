import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { close, logo, menu } from '../../../public/NewAssest/assets'

const Nav = () => {

  const [toggle, setToggle] = useState(false)

  const [search, setSearch] = useState(false)

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
    <nav className='w-full flex py-3  items-center' >
      <Link href='/'>
        <Image src="/NewAssest/assets/logo.svg" alt="Darby" width={150} height={70} className='w-[100px] h-[70px] mt-[-10000px] mb-[-15px] ml-[-15px]' />
      </Link>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1' >
        <li className={`font-normal cursor-pointer text-[16px] mr-10 text-white`} >
          <a href="#" >
            Home
          </a>
        </li>
        <li className={`font-normal cursor-pointer text-[16px] mr-10 text-white`}>
          <a href="#">
            About
          </a>
        </li>
        <li className={`font-normal cursor-pointer text-[16px] mr-10 text-white`}>
          <a href="#" >
            Contact
          </a>
        </li>
        <li className={`font-normal cursor-pointer text-[16px] mr-10 text-white`}>
          <a href="#" >
            FAQ
          </a>
        </li>
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>

        <FontAwesomeIcon className='w-[20px] mr-6 text-white ' onClick={() => setSearch((prev) => !prev)} icon={faSearch} />

        <div className={`${search ? 'flex search' : 'sidebar-close'}  p-6 bg-black-gradient absolute top-[84px] right-0 mz-4 my-2 w-[100%] h-auto rounded-sm box-shadow  `} >
          <input type="text" placeholder='Search' className='w-[100%] h-[50px] rounded-lg px-4 text-gradient text-white' />
        </div>

        <img
          src={toggle ? "NewAssest/assets/close.svg" : "NewAssest/assets/menu.svg"}
          alt="Menu"
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />


        <div style={{ textAlign: "center" }} className={`${toggle ? 'flex sidebar' : ' sidebar-close'} p-6 bg-black-gradient absolute top-[84px] right-0 mz-4 my-2 w-[50%] h-[100vh]  box-shadow `}>

        {/* <div className='flex flex-row flex-wrap items-center absolute top-[20px] justify-evenly' >
          <div className={`font-normal bg-black-gradient-3 cursor-pointer text-[16px] mt-20 mb-5 ml-5 pl-[25px] pr-[25px] pt-[10px] pb-[10px] text-white rounded-xl`} >
            <a href="#" className='text-gradient'>
              Login
            </a>
          </div>
          <div className={`font-normal bg-black-gradient-4 cursor-pointer text-[16px] mt-20 mb-5 ml-5 pl-[25px] pr-[25px] pt-[10px] pb-[10px] text-white rounded-xl`} >
            <a href="#" >
              Signup
            </a>
          </div>
        </div> */}

          <ul className='list-none sm:flex  justify-end items-center flex-1 ' >
            <li className={`font-normal  cursor-pointer text-[16px] mt-[20px] mb-5 p-2 text-white`} >
              <a href="#" >
                Home
              </a>
            </li>
            <li className={`font-normal cursor-pointer text-[16px] mb-5 p-2  text-white`}>
              <a href="#">
                About
              </a>
            </li>
            <li className={`font-normal cursor-pointer text-[16px] mb-5 text-white`}>
              <a href="#" >
                Contact
              </a>
            </li>
            <li className={`font-normal cursor-pointer text-[16px] mb-5 p-2 text-white`}>
              <a href="#" >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Nav