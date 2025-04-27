import React from 'react'
import { DessertsArray } from '../data/DessertsArray'

const Pizza = ({ addToCard }) => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <h1 className='text-3xl text-yellow font-bold mt-10 mb-10'>Dessert</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6'>
          {DessertsArray.map((card, index) => (
            <div key={index} className='space-y-4 p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white'>
              <div>
                <img 
                  className='w-full h-36 sm:h-40 md:h-40 lg:h-48 xl:h-52 object-cover rounded-xl' 
                  src={card.img} 
                  alt={card.description} 
                />
                <div className='text-gray font-semibold text-md mt-2'>{card.description}</div>
              </div>
              <h2 className='text-gray font-medium'>{card.desc}</h2>
              <div className='flex space-x-4 items-center'>
                <p className='font-bold text-xl'>{card.price}</p>
                <button onClick={() => addToCard(card)} className='btn-yellow font-medium text-white'>В корзину</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pizza
