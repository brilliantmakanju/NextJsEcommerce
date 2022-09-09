import React from 'react'
import { NewArrivalProduct } from '../Flashydeal/Data'

const NewArrivalCard = () => {
    return (
        <>
            <div className="content grid product">
                {
                    NewArrivalProduct.map((value, index) => {
                        return (
                            <div className="box" key={index}>
                                <div className="img">
                                    <img src={value.productimg} alt={value.name} onBlur={value.productimg} />
                                </div>
                                <h4>{value.name}</h4>
                                <span>{value.price}</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default NewArrivalCard