'use client'
import React, { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "swiper/css/navigation";


import './gallery.css';



import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import Navigate from '../components/navigation/navigation';
import Footer from '../components/footer/footer';
import PageLoader from '../components/loader/pageLoader';

export default function Gallery() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous action
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
   {isLoading ? <PageLoader /> :
    <div>
      <div className="navigate">
        <Navigate></Navigate>
      </div>
      <center><h1>
          Gallery
      </h1></center>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 400,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
      
          navigation={true}
          modules={[EffectCoverflow, Pagination ,Navigation]}
          className="mySwiper"
        > 

          <SwiperSlide>
            <img  src="https://i.ibb.co/2hTSGt9/11.jpg" className='imageclass'
           />
          </SwiperSlide>
          <SwiperSlide>
          <img   src=" https://i.ibb.co/1RdfzYK/9.jpg" className='imageclass'/>
          </SwiperSlide>
          <SwiperSlide> 
            <img src="https://i.ibb.co/n8vq6pQ/8.jpg"alt='' className='imageclass'/>
          </SwiperSlide>
          <SwiperSlide> 
            <img src="https://i.ibb.co/dgVPHKv/7.jpg"alt='' className='imageclass'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/dkwCHhJ/5.jpg" alt='' className='imageclass'/>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative top-28 lg:top-44 lg:h-[45vh] h-[40vh]  lg:w-[35vw] rounded-lg'>
              <img src="https://i.ibb.co/5x0SWRL/Whats-App-Image-2024-05-18-at-14-36-01-37caabb8.jpg"
              className='h-[100%] rounded-3xl bg-gradient-to-b from-transparent to-transparent ' alt='' />
            </div>
            
            {/* [url=https://ibb.co/nQNdKW8][img]https://i.ibb.co/dkwCHhJ/5.jpg[/img][/url]
[url=https://ibb.co/nCY7Kky][img][/img][/url]
[url=https://ibb.co/DgyPzdw][img][/img][/url]
[url=https://ibb.co/h2ZRYxH][img][/img][/url]
[url=https://ibb.co/4tH2hTq][img][/img][/url]
[url=https://ibb.co/7NfZJ1K][img][/img][/url] */}
            
            </SwiperSlide> 
         </Swiper>
         <div className="footer">
          <Footer></Footer>
         </div>
    </div>}
    </>
  );
}
