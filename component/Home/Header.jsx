import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { HeaderBannerCont, HeaderBannersCont, HeaderBannerText, HeaderBannerTextH1, HeaderBannerTextH3, HeaderCategoryContainer, HeaderCategoryList, HeaderCategoryType } from '../../Stylings/Home/Header'

const Header = () => {

  const Category = [
    {
      icon:'assest/p1.png',
      name: "Fashion"
    },
    {
      icon:'assest/p2.png',
      name: "Electronic"
    },
    {
      icon:'assest/w1.png',
      name: "Cars"
    },
    {
      icon:'assest/p4.png',
      name: "Home & Garden"
    },
    {
      icon:'assest/w1.png',
      name: "Groceries"
    },
    {
      icon:'assest/p6.png',
      name: "Baby Toys"
    },
    {
      icon:'assest/p7.png',
      name: "Gifts"
    },
    {
      icon:'assest/p8.png',
      name: "Musical Instrument"
    },
    {
      icon:'assest/p9.png',
      name: "Health & Beauty"
    },
    {
      icon:'assest/w1.png',
      name: "Pets"
    },
    {
      icon:'assest/w2.png',
      name: "Books"
    }
  ]

  const Banners = [
    {
      title:'50% off For Your First Shopping',
      desc:'Signup now and get 50% off on your first shopping Signup now and get 50% off on your first shopping Signup now and get 50% off on your first shopping Signup now and get 50% off on your first shopping ',
      linkUrl:'/',
      imgUrl:'assest/p1.png'
    }
    // {
    //   title:'50% off For Your First Shopping',
    //   desc:'Signup now and get 50% off on your fisth shopping',
    //   linkUrl:'/',
    //   imgUrl:'assest/p2.png'
    // },
    // {
    //   title:'50% off For Your First Shopping',
    //   desc:'Signup now and get 50% off on your fisth shopping',
    //   linkUrl:'/',
    //   imgUrl:'assest/p3.png'
    // },
    // {
    //   title:'50% off For Your First Shopping',
    //   desc:'Signup now and get 50% off on your fisth shopping',
    //   linkUrl:'/',
    //   imgUrl:'assest/p4.png'
    // }
  ]

  return (
    <HeaderBannerCont>
      <HeaderCategoryContainer>
        <HeaderCategoryType>
          {
            Category.map((category) => (
              <HeaderCategoryList>
                <img src={category.icon} alt={category.name} /> {category.name}
              </HeaderCategoryList>
            ))
          }
        </HeaderCategoryType>
      </HeaderCategoryContainer>
      <HeaderBannersCont>
        {
          Banners.map((banner) => (
            <>
              <HeaderBannerText>
                <HeaderBannerTextH1>{banner.title}</HeaderBannerTextH1>
                <HeaderBannerTextH3>{banner.desc}</HeaderBannerTextH3>
              </HeaderBannerText>
            </>
          ))
        }
      </HeaderBannersCont>
    </HeaderBannerCont>
  )
}

export default Header






