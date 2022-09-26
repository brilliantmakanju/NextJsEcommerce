import React, { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'


export const CarouselItem = ({ children, width }) => {
    return (
        <div className="carouel-itemss">
            {children}
        </div>
    )
}

export const Carousel = ({ children }) => {

    const [activeIndex, setActiveIndex] = useState(0)
    const [paused, setPaused] = useState(false)


    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0
        }

        setActiveIndex(newIndex)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            // if(activeIndex < React.Children.count(children)){
            //     setActiveIndex(0)
            // }
            // else{
            // }
            if (!paused) {
                updateIndex(activeIndex + 1)
            }
            // updateIndex(activeIndex + 1)
        }, 1000)

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    })


    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    })


    return (
        <div
            {...handlers}
            className="carouel" id='carouel'
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => { setPaused(false) }}
        >

            <div className="innere" style={{
                transform: `translateX(-${activeIndex * 100}%)`
            }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" })
                })}
            </div>
            {/* <div className="indic">
                <button onClick={() => { updateIndex(activeIndex - 1) }}>
                    Prev
                </button>
                {
                    React.Children.map(children, (child, index) => {
                        return (
                            <button onClick={() => updateIndex(index)}>
                                {index + 1}
                            </button>
                        )
                    })
                }
                <button onClick={() => { updateIndex(activeIndex + 1) }}>
                    Next
                </button>
            </div> */}
        </div>
    )
}