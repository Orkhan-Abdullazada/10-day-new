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
           
       
            
            <SwiperSlide style={{position:"relative"}}><img style={{marginLeft:'40%'}} className='image' src="https://htmldemo.net/pustok/pustok/image/bg-images/home-slider-2-ai.png" alt="" />
            <span style={{position:"absolute",top:"160px",left:"40px"}}>
            <h1>H.G. Wells 
            <br />
            De Vengeance
          </h1>
          <h2>Cover Up Front Of Books and Leave Summary</h2>
          <br /> <br />   
          <button className='swipper__btn'>$78.09 - Order Now!</button>
            </span>
            </SwiperSlide>
            <SwiperSlide style={{position:"relative"}}><img className='image' src="https://htmldemo.net/pustok/pustok/image/bg-images/home-slider-1-ai.png" alt="" />
            <span style={{position:'absolute',top:'160px',left:"600px"}}>
              <h1>J.D. Kurtness
                <br />
                 De Vengeance</h1>
                 <h2>Cover Up Front Of Books And Leave Summary</h2>
                 <br /> <br />
                 <button style={{border:'1px solid #62ab00',color:'#62ab00',width:'160px', height:'45px',}}>$78.09 - Learn More</button>
            </span>
            </SwiperSlide>
           
          </Swiper>
        </>
      );
}

export default Carusel