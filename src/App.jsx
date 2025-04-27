import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; 

import Header from './components/Header'
import Home from './pages/Home'
import Pizza from './pages/Pizza'
import Paste from './pages/Paste'
import Soups from './pages/Soups'
import Salads from './pages/Salads'
import Desert from './pages/Desert'
import Stock from './pages/Action'
import Location from './pages/Location'
import Footer from './components/Footer'
import CardPage from './pages/CardPage'
import FavoritesPage from './pages/FavoritesPage';


const App = () => {

  const [card, setCart] = useState([])
  const [favorites, setFavorites] = useState([])

  const addToCard = (item) => {
    const found = card.some(i => i.id === item.id);
    if (!found) {
      setCart([...card, item]);
      toast.success('Mahsulot savatchaga qo\'shildi!', { autoClose: 2000 });
    } else {
      toast.error('Bu mahsulot oldin qo\'shilgan!', { autoClose: 2000 });
    }
  }
  
  const toggleFavorite = (item) => {
    const exists = favorites.some(fav => fav.id === item.id);
    if (exists) {
        setFavorites(favorites.filter(fav => fav.id !== item.id));
    } else {
        setFavorites([...favorites, item]);
    }
};




  return (
    <>
      
      <Header/>
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<Pizza addToCard={addToCard } favorites={favorites} toggleFavorite={(item) => {
        const exists = favorites.some(fav => fav.id === item.id);
        if (exists) {
          setFavorites(favorites.filter(fav => fav.id !== item.id));
        } else {
          setFavorites([...favorites, item]);
        }
      }} />} />  
        <Route path="/paste" element={<Paste addToCard={addToCard} favorites={favorites} toggleFavorite={(item) => {
        const exists = favorites.some(fav => fav.id === item.id);
        if (exists) {
          setFavorites(favorites.filter(fav => fav.id !== item.id));
        } else {
          setFavorites([...favorites, item]);
        }
      }} />} />
        <Route path="/soups" element={<Soups addToCard={addToCard} favorites={favorites} toggleFavorite={(item) => {
        const exists = favorites.some(fav => fav.id === item.id);
        if (exists) {
          setFavorites(favorites.filter(fav => fav.id !== item.id));
        } else {
          setFavorites([...favorites, item]);
        }
      }} />} />
        <Route path="/salads" element={<Salads addToCard={addToCard} favorites={favorites} toggleFavorite={(item) => {
        const exists = favorites.some(fav => fav.id === item.id);
        if (exists) {
          setFavorites(favorites.filter(fav => fav.id !== item.id));
        } else {
          setFavorites([...favorites, item]);
        }
      }} />} />
       

        <Route path="/desert" element={<Desert addToCard={addToCard} favorites={favorites} toggleFavorite={(item) => {
        const exists = favorites.some(fav => fav.id === item.id);
        if (exists) {
          setFavorites(favorites.filter(fav => fav.id !== item.id));
        } else {
          setFavorites([...favorites, item]);
        }
      }} />} />
      
      <Route path="/stock" element={<Stock addToCard={addToCard} favorites={favorites} toggleFavorite={(item) => {
        const exists = favorites.some(fav => fav.id === item.id);
        if (exists) {
          setFavorites(favorites.filter(fav => fav.id !== item.id));
        } else {
          setFavorites([...favorites, item]);
        }
      }} />} />
      
        <Route path="/location" element={<Location addToCard={addToCard} favorites={favorites} toggleFavorite={(item) => {
        const exists = favorites.some(fav => fav.id === item.id);
        if (exists) {
          setFavorites(favorites.filter(fav => fav.id !== item.id));
        } else {
          setFavorites([...favorites, item]);
        }
      }} />} />
        <Route path="/card" element={<CardPage card={card} />} />
    
        
     
      </Routes>
      
      <Footer/>
      <ToastContainer position="bottom-right" /> 
    </>
  )
}

export default App