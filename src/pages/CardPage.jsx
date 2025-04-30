import { useState } from "react";

const CartPage = ({ card }) => {
  const [cartItems, setCartItems] = useState(
    card.map(item => ({ ...item, quantity: 1 }))
  );

  const handleQuantityChange = (index, delta) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity += delta;

    if (updatedItems[index].quantity <= 0) {
      updatedItems.splice(index, 1);
    }

    setCartItems(updatedItems);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };

  const totalPrice = cartItems.reduce((sum, item) => {
    const cleanPrice = parseFloat(item.price.toString().replace(/[^\d.]/g, ""));
    return sum + cleanPrice * item.quantity;
  }, 0);

  return (
    <section className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="container max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6">
        <h1 className='text-3xl text-yellow-500 text-center font-bold mt-6 mb-8'>Корзина</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Savatchangiz bo'sh...</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item, index) => {
              const cleanPrice = parseFloat(item.price.toString().replace(/[^\d.]/g, ""));
              const itemTotal = (cleanPrice * item.quantity).toFixed(2);
              return (
                <div key={index} className="flex flex-col sm:flex-row items-center justify-between pb-4 border-b gap-4">

                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img src={item.img} alt={item.title} className="w-20 h-20 rounded-xl object-cover" />
                    <div className="space-y-1">
                      <h3 className="font-semibold text-base sm:text-lg">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                      <p className="text-yellow-500 font-bold text-lg">{cleanPrice} ₽</p>
                    </div>
                  </div>


                  <div className="flex items-center space-x-2">
                    <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => handleQuantityChange(index, -1)}>–</button>
                    <span className="px-3 text-lg">{item.quantity}</span>
                    <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => handleQuantityChange(index, 1)}>+</button>
                  </div>


                  <div className="flex items-center gap-3">
                    <div className="text-yellow-500 font-semibold text-lg">{itemTotal} ₽</div>
                    <button
                      className="text-gray-400 hover:text-red-500 text-2xl font-bold"
                      onClick={() => handleRemoveItem(index)}
                    >
                      ×
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}


        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4">
          <input
            type="text"
            placeholder="Promokod"
            className="border p-2 rounded w-full sm:w-1/3"
          />
          <div className="text-xl font-bold">
            All price: <span className="text-yellow-500">{totalPrice.toFixed(2)} ₽</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
