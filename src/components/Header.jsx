import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../src/assets/icons/logo.svg';
import yandexEda from '../../src/assets/icons/yandex-eda.svg';
import starIcon from '../../src/assets/icons/star.svg';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toCard = () => {
    navigate('/card');
  };

  const toFavorite = () => {
    navigate('/favorite');
  };

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      {/* Top Bar */}
      <div className="container py-5 flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="fibo logo" />

        {/* Burger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Right content (only on md and up) */}
        <div className="hidden md:flex items-center space-x-14">
          <div className="flex flex-col space-y-1">
            <p className="font-semibold text-lg">
              Доставка пасты <span className="text-yellow">Москва</span>
            </p>
            <div className="flex items-center space-x-3 text-sm font-bold">
              <div className="flex space-x-2 items-center">
                <img src={yandexEda} alt="yandexEda" />
                <span>Яндекс еда</span>
              </div>
              <span className="circle"></span>
              <div className="flex space-x-2 items-center">
                <span>4.8</span>
                <img src={starIcon} alt="starIcon" />
              </div>
              <div className="flex space-x-2 items-center">
                <span>Время доставки</span>
                <div className="circle"></div>
                <span>от 31 мин</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="btn-grey">Заказать звонок</button>
            <a href="#" className="font-bold text-2xl text-yellow">8 499 391-84-49</a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden font-bold bg-yellow py-4 transition-all duration-300 rounded-b-2xl">
          <nav className="flex flex-col items-center gap-4 px-4">
            <Link to="/" onClick={() => setMenuOpen(false)} >Home</Link>
            <Link to="/pizza" onClick={() => setMenuOpen(false)}>Pizza</Link>
            <Link to="/paste" onClick={() => setMenuOpen(false)}>Paste</Link>
            <Link to="/soups" onClick={() => setMenuOpen(false)}>Soups</Link>
            <Link to="/salads" onClick={() => setMenuOpen(false)}>Salads</Link>
            <Link to="/drinks" onClick={() => setMenuOpen(false)}>Drinks</Link>
            <Link to="/desert" onClick={() => setMenuOpen(false)}>Desert</Link>
            <Link to="/stock" onClick={() => setMenuOpen(false)}>Action</Link>
            <Link to="/location" onClick={() => setMenuOpen(false)}>Location</Link>
          </nav>
          <div className="flex flex-col items-center space-y-2 mt-4 px-4">
            <button onClick={toFavorite} className="btn-white border w-full">Favorites</button>
            <button onClick={toCard} className="btn-yellow w-full">Cart</button>
          </div>
        </div>
      )}

      {/* Full Menu for md and up */}
      <div className="hidden md:block">
        <div className="container font-semibold mt-6 md:mt-0">
          <div className="flex justify-between items-center w-full">
            <nav className="flex gap-4 p-4 flex-wrap">
              <Link to="/" className="hover:text-gray-500 transition">Home</Link>
              <Link to="/pizza" className="hover:text-gray-500 transition">Pizza</Link>
              <Link to="/paste" className="hover:text-gray-500 transition">Paste</Link>
              <Link to="/soups" className="hover:text-gray-500 transition">Soups</Link>
              <Link to="/salads" className="hover:text-gray-500 transition">Salads</Link>
              <Link to="/drinks" className="hover:text-gray-500 transition">Drinks</Link>
              <Link to="/desert" className="hover:text-gray-500 transition">Desert</Link>
              <Link to="/stock" className="hover:text-gray-500 transition">Action</Link>
              <Link to="/location" className="hover:text-gray-500 transition">Location</Link>
            </nav>
            <div className="flex space-x-4">
              <button onClick={toFavorite} className="btn-white border">Favorites</button>
              <button onClick={toCard} className="btn-yellow">Cart</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
