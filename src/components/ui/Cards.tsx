import React from 'react'

import Link from 'next/link'
// import { Navigation } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

type Cruise = {
  id:number,
  title:string,
  category: string,
  price: number,
  duration: string,
  images: string[],
};

type CardProps = {
  cruise: Cruise
}

const Cards:React.FC<CardProps> = ({cruise}) => {
  return (
    <>
      <div className='flex flex-col justify-center'>
      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
          <h1>{cruise.category}</h1>
          <div className='flex flex-row gap-10 text-2xl font-bold text-[]'>
          <h1>{cruise.title}</h1>
          <h1>{cruise.price}</h1>

          </div>
          <h2 className='text-sm'>Duration -{cruise.duration}</h2>
          <div className='flex gap-5 text-xl font-semibold'>
          <Link href='#'>Discover</Link>
          <Link href='#'>Book your Stay</Link>
          </div>


      </div>
    </>
  )
}

export default Cards
