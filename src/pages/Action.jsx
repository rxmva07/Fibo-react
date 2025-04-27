import React from 'react'
import { ActionArray } from '../data/ActionArray';

const Stock = () => {
  return (
    <section>
      <div className="container">
        <h1 className='text-3xl text-yellow font-bold mt-10 mb-10'>Action</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {ActionArray.map((card, index) => (
            <div key={index} className='space-y-4 p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white'>
              <div>
                <img className='w-full h-auto object-cover' src={card.img} alt={card.desc} />
                <div className='text-gray font-bold text-2xl'>{card.title}</div>
              </div>
              <h2 className='text-gray text-sm font-semibold'>{card.desc}</h2>
              <div className='flex space-x-4 items-center'>
                <p className='font-bold text-xl'>{card.price}</p>
                <button className='btn-yellow font-medium text-white'>Просмотреть</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stock
