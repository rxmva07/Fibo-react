import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../src/assets/icons/logo.svg'
import yandexEda from '../../src/assets/icons/yandex-eda.svg'
import starIcon from '../../src/assets/icons/star.svg'


const Header = () => {
    const navigate = useNavigate();
    
    const toCard = () => {
        navigate('/card')
    };

    const toFavorite = () => {
        navigate('/favorite')
    };
    return (
    <header>
        <div className="container py-5 flex justify-between items-center flex-col md:flex-row">
            <img src={logo} alt="fibo logo" className="mb-4 md:mb-0" />

           <div className='flex flex-col md:flex-row md:space-x-14 items-center'>
           <div className='flex flex-col space-y-1 text-center md:text-left'>
                <p className='font-semibold text-lg'>Доставка пасты <span className='text-yellow'>Москва</span></p>
                <div className='flex items-center space-x-3 text-13 font-bold justify-center md:justify-start'>
                    <div className='flex space-x-2'>
                        <img src={yandexEda} alt="yandexEda" />
                        <span>Яндекс еда</span>
                    </div>

                    <span className='circle'></span>

                    <div className='flex space-x-2'>
                        <span>4.8</span>
                        <img src={starIcon} alt="starIcon" />
                    </div>

                    <div className='flex items-center space-x-2'>
                        <span>Время доставки</span>
                        <div className='circle'></div>
                        <span>от 31 мин</span>
                    </div>
                </div>
            </div>
           </div>

            <div className='flex flex-col md:flex-row space-x-3 items-center mt-4 md:mt-0'>
                <button className='btn-grey'>Заказать звонок</button>
                <a className='font-bold text-2xl text-yellow' href="">8 499 391-84-49</a>
            </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center container font-semibold mt-6'>
            <div className='rounded-2xl bg-white w-full'>
                <nav className="flex  gap-4 p-4 flex-wrap justify-center">
                    <Link to="/" className="hover:text-gray-500 hover:underline transition">Home</Link>
                    <Link to="/pizza" className="hover:text-gray-500 hover:underline transition">Pizza</Link>
                    <Link to="/paste" className="hover:text-gray-500 hover:underline transition">Paste</Link>
                    <Link to="/soups" className="hover:text-gray-500 hover:underline transition">Soups</Link>
                    <Link to="/salads" className="hover:text-gray-500 hover:underline transition">Salads</Link>
                    <Link to="/drinks" className="hover:text-gray-500 hover:underline transition">Drinks</Link>
                    <Link to="/desert" className="hover:text-gray-500 hover:underline transition">Desert</Link>
                    <Link to="/stock" className="hover:text-gray-500 hover:underline transition">Action</Link>
                    <Link to="/location" className="hover:text-gray-500 hover:underline transition">Location</Link>
                </nav>
            </div>

         
         <div className='flex space-x-10'> 
          <div className='mt-4 md:mt-0 flex space-x-2'>
            <button onClick={toFavorite} className='btn-white border'>Favorites</button>
            <button onClick={toCard}  className='btn-yellow'>Cart | </button>
            </div>

            

         </div>
         

        
        
        </div>
    </header>
  )
}

export default Header
