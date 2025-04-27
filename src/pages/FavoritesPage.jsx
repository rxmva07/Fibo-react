import React from 'react';
import { Heart } from 'lucide-react';

const FavoritesPage = ({ favorites, toggleFavorite }) => {
  return (
    <section>
      <div className="container">
        <h1 className="text-3xl text-yellow font-bold mt-14 mb-10">Избранное</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {favorites.length > 0 ? (
            favorites.map((pizza) => (
              <div key={pizza.id} className="relative space-y-4">
                <img
                  src={pizza.img}
                  alt={pizza.type}
                  className="w-full object-cover rounded-xl mb-2"
                />
                <h2 className="text-lg font-semibold mb-1">{pizza.type}</h2>
                <p className="text-sm text-gray-500 mb-2">{pizza.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold">{pizza.price} ₽</span>
                  <button
                    onClick={() => toggleFavorite(pizza)} // Yurak tugmasi bosilganda
                    className="text-red-500"
                  >
                    <Heart fill="currentColor" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-xl">Список избранных пуст</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FavoritesPage;
