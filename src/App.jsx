import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import Header from './components/Header';
import Home from './pages/Home';
import Pizza from './pages/Pizza';
import Paste from './pages/Paste';
import Soups from './pages/Soups';
import Salads from './pages/Salads';
import Desert from './pages/Desert';
import Stock from './pages/Action';
import Location from './pages/Location';
import Footer from './components/Footer';
import CardPage from './pages/CardPage';
import FavoritesPage from './pages/FavoritesPage';
import Drinks from './pages/Drinks';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [card, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToCard = (item) => {
    const found = card.some((i) => i.id === item.id);
    if (!found) {
      setCart([...card, item]);
      toast.success("Mahsulot savatchaga qo'shildi!", { autoClose: 2000 });
    } else {
      toast.error("Bu mahsulot oldin qo'shilgan!", { autoClose: 2000 });
    }
  };

  const toggleFavorite = (item) => {
    const exists = favorites.some((fav) => fav.id === item.id);
    if (exists) {
      setFavorites(favorites.filter((fav) => fav.id !== item.id));
      toast.info("Sevimlilardan olib tashlandi!", { autoClose: 1500 });
    } else {
      setFavorites([...favorites, item]);
      toast.success("Sevimlilarga qo‘shildi!", { autoClose: 1500 });
    }
  };

  const pageProps = { addToCard, favorites, toggleFavorite };

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<Pizza {...pageProps} />} />
        <Route path="/paste" element={<Paste {...pageProps} />} />
        <Route path="/soups" element={<Soups {...pageProps} />} />
        <Route path="/salads" element={<Salads {...pageProps} />} />
        <Route path="/desert" element={<Desert {...pageProps} />} />
        <Route path="/stock" element={<Stock {...pageProps} />} />
        <Route path="/location" element={<Location {...pageProps} />} />
        <Route path="/card" element={<CardPage card={card} />} />
        <Route path="/favorite" element={<FavoritesPage favorites={favorites} addToCard={addToCard} toggleFavorite={toggleFavorite} />} />
        <Route path="/drinks" element={<Drinks {...pageProps} />} />
      </Routes>

      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default App;
