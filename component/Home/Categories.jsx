import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { CategoryContainer } from '../Styles/Home/Categories'

const Categories = () => {

    const dataCate = [
        {
            cateName: "fashion",
            cateImg: "assest/p1.png"
        },
        {
            cateName: "electronic",
            cateImg: "assest/p2.png"
        },
        {
            cateName: "cars",
            cateImg: "assest/p3.png"
        },
        {
            cateName: "home & garden",
            cateImg: "assest/w1.png"
        },
        {
            cateName: "gifts",
            cateImg: "assest/w2.png"
        },
        {
            cateName: "music",
            cateImg: "assest/p7.png"
        },
        {
            cateName: "books",
            cateImg: "assest/p8.png"
        },
        {
            cateName: "pets",
            cateImg: "assest/p9.png"
        },
        {
            cateName: "fitness & sport",
            cateImg: "assest/w2.png"
        },
        {
            cateName: "toys",
            cateImg: "assest/w3.png"
        },
        {
            cateName: "accessories",
            cateImg: "assest/p3.png"
        }
    ]

    return (
        <CategoryContainer id='categories-top'>
            {
                dataCate.map((data, index) => (
                    <div className='box f_flex' key={index}>
                        <img src={data.cateImg} alt={data.cateName} />
                        <span>{data.cateName}</span>
                    </div>
                ))
            }
        </CategoryContainer>
    )
}

export default Categories