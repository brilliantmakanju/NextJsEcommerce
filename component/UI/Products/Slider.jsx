import React from 'react'

const Slider = () => {
    return (
        // <div className="shadow-2xl w-full">

        // </div>
        <div className="carousel-item  flex flex-row mt-2" >

            {/* <div style={{fontSize:"11px"}} className='absolute left-4 mt-2 flex flex-row flex-1 justify-center items-center p-1 rounded-sm capitalize'>
                <img src="NewAssest/assets/Discount.svg" alt="Discount" className='mr-1 w-[20px]' />
                <span className='text-white mr-1'>
                    20%
                </span>
                <span className='text-gradient'>
                     Discount for 
                </span>
                <span className='text-white ml-1 mr-1'>
                    1 Month
                </span>
                <span className='text-gradient'>
                    Account
                </span>
            </div> */}

            {/* <div className="bg-primary block h-full w-full text-white text-center rounded-xl">
                <img src="assest/Carousel/topcar.png" alt="" className=' md:w-[50vh] md:h-[60vh] sm:w-[40vh] sm:h-[40vh] ss:w-[25vh] ss:h-[25vh] xs:w-[50vh] xs:h-[50vh]  w-[25vh] h-[25vh] mt-[10px] mb-[10px] float-right z-[8] mr-[-10px] ' />
                <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient ' />
                <div className='absolute z-[0] w-[80%] h-[80%] rounded-full bottom-40 white__gradient ' />
                <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient pink__gradient ' />
            </div> */}

            <div style={{ fontSize: "11px" }} className='absolute right-4 mt-2 flex flex-row flex-1 justify-center items-center p-1 rounded-sm capitalize'>
                <img src="NewAssest/assets/Discount.svg" alt="Discount" className='mr-1 w-[20px]' />
                <span className='text-white mr-1'>
                    20%
                </span>
                <span className='text-gradient'>
                    Discount for
                </span>
                <span className='text-white ml-1 mr-1'>
                    1 Month
                </span>
                <span className='text-gradient'>
                    Account
                </span>
            </div>

            <div className='absolute  right-5 mt-5 flex flex-row flex-1 justify-center items-center p-1 rounded-sm capitalize'>
                <h1 className='flex-1 font-semibold ss:text-[72px] text-[40px] text-white ss:leding-[100px] '>
                    The Best <br className='sm:block hidden' /> {" "}
                    <span className='text-gradient'>Shopping</span> {" "}
                    Company Ever
                </h1>
            </div>

            <div className="bg-primary block h-full w-full text-white text-center rounded-xl">
                <img src="assest/LoginSidePic.jpeg" alt="" className=' object-cover' />
                <div className='absolute z-[0] w-[40%] h-[35%] top-0 left-0 pink__gradient ' />
                <div className='absolute z-[0] w-[80%] h-[80%] rounded-full left-0 bottom-40 white__gradient ' />
                <div className='absolute z-[0] w-[50%] h-[50%] left-20 bottom-20 blue__gradient pink__gradient ' />

            </div>
        </div>
    )
}

export default Slider



    // <div id="carouselExampleCaptions" classNameName="carousel slide relative" data-bs-ride="carousel">
    //     <div classNameName="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4" >
    //         <button
    //             type="button"
    //             data-bs-target="#carouselExampleCaptions"
    //             data-bs-slide-to="0"
    //             classNameName="active"
    //             aria-current="true"
    //             aria-label="Slide 1"
    //         ></button>
    //         <button
    //             type="button"
    //             data-bs-target="#carouselExampleCaptions"
    //             data-bs-slide-to="1"
    //             aria-label="Slide 2"
    //         ></button>
    //         <button
    //             type="button"
    //             data-bs-target="#carouselExampleCaptions"
    //             data-bs-slide-to="2"
    //             aria-label="Slide 3"
    //         ></button>
    //     </div>
    //     <div classNameName="carousel-inner relative w-full overflow-hidden">
    //         <div classNameName="carousel-item active relative float-left w-full">
    //             <img
    //                 src="assest/client.jpg"
    //                 classNameName="block w-full"
    //                 alt="..."
    //             />
    //             <div classNameName="carousel-caption hidden md:block absolute text-center">
    //                 <h5 classNameName="text-xl">First slide label</h5>
    //                 <p>Some representative placeholder content for the first slide.</p>
    //             </div>
    //         </div>
    //         <div classNameName="carousel-item relative float-left w-full">
    //             <img
    //                 src="assest/client.jpg"
    //                 classNameName="block w-full"
    //                 alt="..."
    //             />
    //             <div classNameName="carousel-caption hidden md:block absolute text-center">
    //                 <h5 classNameName="text-xl">Second slide label</h5>
    //                 <p>Some representative placeholder content for the second slide.</p>
    //             </div>
    //         </div>
    //         <div classNameName="carousel-item relative float-left w-full">
    //             <img
    //                 src="assest/client.jpg"
    //                 classNameName="block w-full"
    //                 alt="..."
    //             />
    //             <div classNameName="carousel-caption hidden md:block absolute text-center">
    //                 <h5 classNameName="text-xl">Third slide label</h5>
    //                 <p>Some representative placeholder content for the third slide.</p>
    //             </div>
    //         </div>
    //     </div>
    //     <button
    //         classNameName="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    //         type="button"
    //         data-bs-target="#carouselExampleCaptions"
    //         data-bs-slide="prev"
    //     >
    //         <span classNameName="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    //         <span classNameName="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //         classNameName="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    //         type="button"
    //         data-bs-target="#carouselExampleCaptions"
    //         data-bs-slide="next"
    //     >
    //         <span classNameName="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    //         <span classNameName="visually-hidden">Next</span>
    //     </button>
    // </div>
    // <div classNameNameName="carousel slide relative" >
    //     <div classNameNameName="carousel-inner relative w-full overflow-hidden">
    //         <div classNameNameName="carousel-item active relative float-left w-full">
    //             <img
    //                 src="assest/client.jpg"
    //                 classNameNameName="block w-full"
    //                 alt="Wild Landscape"
    //             />
    //         </div>
    //         <div classNameNameName="carousel-item relative float-left w-full">
    //             <img
    //                 src="assest/client.jpg"
    //                 classNameNameName="block w-full"
    //                 alt="Camera"
    //             />
    //         </div>
    //         <div classNameNameName="carousel-item relative float-left w-full">
    //             <img
    //                 src="assest/client.jpg"
    //                 classNameNameName="block w-full"
    //                 alt="Exotic Fruits"
    //             />
    //         </div>
    //     </div>
    // </div>