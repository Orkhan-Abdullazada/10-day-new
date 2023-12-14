import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

function Carusel() {
    return (
        <>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <h1>H.G. Wells 
            <br />
            De Vengeance
          </h1>
          <h2>Cover Up Front Of Books and Leave Summary</h2>
            
            <SwiperSlide><img style={{marginLeft:'40%'}} className='image' src="https://htmldemo.net/pustok/pustok/image/bg-images/home-slider-2-ai.png" alt="" /></SwiperSlide>
            <SwiperSlide><img className='image' src="https://htmldemo.net/pustok/pustok/image/bg-images/home-slider-1-ai.png" alt="" /></SwiperSlide>
           
          </Swiper>
        </>
      );
}

export default Carusel