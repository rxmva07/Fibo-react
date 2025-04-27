import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
import { PizzaArray } from "../data/PizzaArray"; 

const Pizza = ({ addToCard, favorites, toggleFavorite }) => {
  const navigate = useNavigate(); 


  const isFavorite = (pizzaId) => favorites.some((fav) => fav.id === pizzaId);

  
  const handleFavoriteClick = (pizza) => {
    toggleFavorite(pizza); 
    if (!isFavorite(pizza.id)) {
     
    }
  };

  return (
    <div className="container mb-20">
      <h1 className="text-3xl text-yellow font-bold mt-14 mb-10">Pizza</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {PizzaArray.map((pizza) => (
          <div key={pizza.id} className="relative space-y-4">
            <img src={pizza.img} alt={pizza.type} className="w-full object-cover rounded-xl mb-2" />
            <h2 className="text-lg font-semibold mb-1">{pizza.type}</h2>
            <p className="text-sm text-gray-500 mb-2">{pizza.description}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-bold">{pizza.price} ₽</span>
              <button onClick={() => addToCard(pizza)} className='btn-yellow font-medium text-white'>
                В корзину
              </button>
            </div>
            <button
              onClick={() => handleFavoriteClick(pizza)} 
              className="absolute top-3 right-3 text-red-500"
            >
              <Heart fill={isFavorite(pizza.id) ? 'currentColor' : 'none'} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pizza;
