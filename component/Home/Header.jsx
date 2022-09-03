import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { HeaderBannerCont, HeaderBannersCont, HeaderCategoryContainer, HeaderCategoryList, HeaderCategoryType } from '../../Stylings/Home/Header'

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
        
      </HeaderBannersCont>
    </HeaderBannerCont>
  )
}

export default Header






