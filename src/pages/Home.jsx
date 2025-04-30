import React from 'react'
import slideOne from '../../src/assets/images/slideOne.jpg'
import slideTwo from '../../src/assets/images/slideTwo.jpg'
import minipizza from '../../src/assets/images/minipizza.svg'


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Home = () => {
 

  const news = [
    {
      id: 1,
      title: 'Карбонара',
      price: 'от 120 ₽',
      image: minipizza
    },
    {
      id: 2,
      title: 'Карбонара',
      price: 'от 120 ₽',
      image: minipizza
    },
    {
      id: 3,
      title: 'Карбонара',
      price: 'от 120 ₽',
      image: minipizza
    },
    {
      id: 4,
      title: 'Карбонара',
      price: 'от 120 ₽',
      image: minipizza
    }
  ]
 
  return (
    <section>
      <div className="container">
      <Swiper
      // install Swiper modules
      modules={[Navigation,]}
      spaceBetween={30}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      loop
    >
      <SwiperSlide>
        <img src={slideOne} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideTwo} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideOne} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideTwo} alt="" />
      </SwiperSlide>
      ...
    </Swiper>

    <div>
  <h1 className='font-bold text-lg md:text-xl lg:text-2xl mt-10'>Новинки</h1>
  <ul className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
    {news.map((item) => (
      <li
        key={item.id}
        className='flex items-center space-x-3 p-4 rounded-3xl transition-all duration-300 hover:shadow-[0_6px_15px_rgba(0,0,0,0.2)]'
      >
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-16 sm:w-20 md:w-24 lg:w-32 h-auto object-contain" 
        />
        <div className='ml-4'>
          <h5 className='font-bold text-sm sm:text-base md:text-lg'>{item.title}</h5>
          <h5 className='font-bold text-yellow text-sm sm:text-base md:text-lg'>{item.price}</h5>
        </div>
      </li>
    ))}
  </ul>
</div>






      </div>
    </section>
  )
}

export default Home


