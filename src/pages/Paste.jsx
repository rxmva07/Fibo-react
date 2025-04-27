import React from 'react'
import { PasteArray } from '../data/PasteArray'

const Paste = ({ addToCard }) => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <h1 className='text-3xl text-yellow font-bold mt-10 mb-10'>Paste</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {PasteArray.map((card, index) => (
            <div key={index} className='space-y-4 p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white'>
              <div>
                <img
                  className='w-full lg:w-full lg:h-56 object-cover rounded-xl'
                  src={card.img}
                  alt={card.title}
                />
                <div className='text-gray font-bold text-2xl mt-2'>{card.title}</div>
              </div>
              <h2 className='text-gray text-sm font-medium'>{card.desc}</h2>
              <div className='flex space-x-4 items-center'>
                <p className='font-bold text-xl'>{card.price}</p>
                <button onClick={() => addToCard(card)} className='btn-yellow font-medium text-white'>
                  В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Paste
